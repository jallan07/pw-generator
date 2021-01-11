const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

// A function for getting all notes from the db
const getNotes = () => {
	return $.ajax({
		url: "/api/notes",
		method: "GET",
	});
};

// A function for saving a note to the db
const saveNote = (note) => {
	return $.ajax({
		url: "/api/notes",
		data: note,
		method: "POST",
	});
};

// A function for deleting a note from the db
const deleteNote = (id) => {
	return $.ajax({
		url: "api/notes/" + id,
		method: "DELETE",
	});
};

// If there is an activeNote, display it, otherwise render empty inputs
const renderActiveNote = () => {
	$saveNoteBtn.hide();

	if (activeNote.id) {
		$noteTitle.attr("readonly", true);
		$noteText.attr("readonly", true);
		$noteTitle.val(activeNote.title);
		$noteText.val(activeNote.text);
	} else {
		$noteTitle.attr("readonly", false);
		$noteText.attr("readonly", false);
		$noteTitle.val("");
		$noteText.val("");
	}
};

// Get the note data from the inputs, save it to the db and update the view
const handleNoteSave = function () {
	const newNote = {
		title: $noteTitle.val(),
		text: $noteText.val(),
	};

	saveNote(newNote).then(() => {
		getAndRenderNotes();
		renderActiveNote();
	});
};

// Delete the clicked note
const handleNoteDelete = function (event) {
	// prevents the click listener for the list from being called when the button inside of it is clicked
	event.stopPropagation();

	const note = $(this).parent(".list-group-item").data();

	if (activeNote.id === note.id) {
		activeNote = {};
	}

	deleteNote(note.id).then(() => {
		getAndRenderNotes();
		renderActiveNote();
	});
};

// Sets the activeNote and displays it
const handleNoteView = function () {
	activeNote = $(this).data();
	renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = function () {
	activeNote = {};
	renderActiveNote();
};

// If a note's title or text are empty, hide the save button
// Or else show it
const handleRenderSaveBtn = function () {
	if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
		$saveNoteBtn.hide();
	} else {
		$saveNoteBtn.show();
	}
};

// Render's the list of note titles
const renderNoteList = (notes) => {
	$noteList.empty();

	const noteListItems = [];

	// Returns jquery object for li with given text and delete button
	// unless withDeleteButton argument is provided as false
	const create$li = (text, withDeleteButton = true) => {
		const $li = $("<li class='list-group-item'>");
		const $span = $("<span>").text(text);
		$li.append($span);

		if (withDeleteButton) {
			const $delBtn = $(
				"<i class='fas fa-check-square float-right delete-note'></i>"
			);
			$li.append($delBtn);
		}
		return $li;
	};

	if (notes.length === 0) {
		// Create the congrats message if they have no pending tasks
		const congrats = create$li(
			`Congrats—you have a free day! Go read a book, fly a kite, or spend some quality time with the family.`,
			false
		);
		// push the congrats message to the note list container
		noteListItems.push(congrats);
		// set the custom color and font for the congrats message
		congrats.css("background-color", "#537d8d");
		congrats.css("font-family", "Oxygen, sans-serif");
	}

	notes.forEach((note) => {
		const $li = create$li(note.title).data(note);
		noteListItems.push($li);
	});

	$noteList.append(noteListItems);
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => {
	return getNotes().then(renderNoteList);
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();

// Initialize AOS
AOS.init();