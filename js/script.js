// Function to fetch and insert header content
function includeHeader() {
    $.get('layout/header.html', function(data) {
        $('#header').html(data);
    });
}

// Function to fetch and insert footer content
function includeFooter() {
    $.get('layout/footer.html', function(data) {
        $('#footer').html(data);
    });
}

// Call the functions to include the header and footer
includeHeader();
includeFooter();