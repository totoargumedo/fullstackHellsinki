sequenceDiagram
actor user
participant browser
participant server

    user->>browser: Press save message button
    activate browser
    deactivate browser
    browser->>browser: Browser redraw the HTML including the note created
    activate browser
    deactivate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Response 201 {"message":"note created"}
    deactivate server
    activate browser
    browser->>browser: Browser show response in console
    deactivate browser
