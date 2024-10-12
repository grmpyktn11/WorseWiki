import wikipedia


# Ask for the Wikipedia article title
search = input("Which article do you want? : ")
results = wikipedia.search(search, results=5)


# Check if any results are returned
if len(results) < 1:
    print("No results found, try again.")
else:
    # Display the search results with numbers
    for idx, result in enumerate(results, start=1):
        print(f"{idx}. {result}")

    # Ask for a valid number from the user
    while True:
        title = input("Here are the top 5 results we found, which do you want? (enter number): ")
        
        # Validate that the input is a number and within the valid range
        if title.isdigit():
            choice = int(title)
            if 1 <= choice <= len(results):
                break
            else:
                print(f"Please enter a number between 1 and {len(results)}.")
        else:
            print("Invalid input, please enter a number.")

    # Fetch and display the selected page
    try:
        page_object = wikipedia.page(results[choice - 1], auto_suggest=False)

        # Print the title of the article
        print(page_object.original_title)

        # Split the content into sections
        sections = page_object.content.split('\n== ')

        # Iterate through sections and print their details
        for i in range(len(sections)):
            section_parts = sections[i].split('== ')
            section_title = section_parts[0].strip()  # Get the section title

            if len(section_parts) > 1:
                section_content = section_parts[1].strip()  # Get the actual content
                print(f"Section Number: {i + 1}")  # Print the section number
                print(f"Section Title: {section_title}")  # Print the section title
                print(f"Section Content: {section_content}\n")  # Print the section content
            else:
                print(f"Section Number: {i + 1}")  # Print the section number
                print(f"Section Title: {section_title} (No content available)\n")  # Indicate no content

    except wikipedia.exceptions.DisambiguationError as e:
        print(f"DisambiguationError: The term '{results[choice - 1]}' refers to multiple topics. Some options are:")
        for option in e.options:
            print(f"- {option}")
    except Exception as ex:
        print(f"An error occurred: {ex}")
