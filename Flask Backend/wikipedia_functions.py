import wikipedia
import re

# Returns a list of the top 5 articles under a name
def get_search_results(name):
    results = wikipedia.search(name, results=5)
    return results if results else None 

# Get the original title of the page
def get_title(title):
    try:
        page_object = wikipedia.page(title, auto_suggest=False)
        return page_object.original_title
    except Exception as e:
        return None

# Get the summary of a given title
def get_summary(title):
    try:
        page_object = wikipedia.page(title, auto_suggest=False)
        return page_object.summary
    except Exception as e:
        return None

# Given an EXACT name, returns a dictionary of section titles and content
def get_sections(title):
    try:
        page_object = wikipedia.page(title, auto_suggest=False)
        sections = re.split(r'== (.*?) ==', page_object.content)
        sections_info = {}

        for i in range(1, len(sections), 2):
            section_title = sections[i].strip().replace('=', '').strip()  # Clean title
            section_content = sections[i + 1].strip() if i + 1 < len(sections) else "Empty Section"
            sections_info[section_title] = section_content

        return sections_info  

    except Exception as e:
        return None

# # Main execution
# title = input("What would you like to look up? ")

# search_results = get_search_results(title)
# if search_results:
#     for result in search_results:
#         print(result)  # Print all search results
    
#     topHit = search_results[0]  # Automatically selecting the first result
#     print(get_title(topHit))     # Print the title
    
#     summary = get_summary(topHit)  # Get summary
#     if summary:
#         print("Summary:")
#         print(summary)  # Print the summary
    
#     sections_info = get_sections(topHit)  # Get sections
#     if sections_info:
#         print("Sections Info:")
#         print(sections_info)  # Print sections dictionary
