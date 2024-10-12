import wikipedia

# Returns a list of the top 5 articles under a name
def get_search_results(name):
    results = wikipedia.search(name, results = 5)
    if len(results) < 1:
        return None
    else:
        return results 
    
def get_title(title):

    try:
        page_object = wikipedia.page(title, auto_suggest=False)
        return page_object.original_title
    except Exception as e:
        return None


#Given an EXACT name, returns a dictionary of section titles and content
def get_sections(title):
    try:
        page_object = wikipedia.page(title, auto_suggest=False)
        
        #split the content into sections
        sections = page_object.content.split('\n== ')
        
        #dictionary to store sectionTitle : sectionContent
        sections_info = {}

        for i in range(sections):
            section_parts = sections[i].split('== ')
            section_title = section.parts[0].strip() #Get the title

            if(len(sections) > 1):
                section_content = section_parts[1].strip()
                sections_info[section_title] = section_content
            else:
                sections_info[section_title] = "Empty Section"
    except Exception as e:
        return None
                















