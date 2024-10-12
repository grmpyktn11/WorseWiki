from flask import Flask, jsonify, request
import wikipedia
import re
from flask_cors import CORS
import wikipedia_functions

app = Flask(__name__)
CORS(app) 

# API endpoint to handle search
@app.route("/get-search/<search_term>")
def get_search_results(search_term):
    top_five_results = wikipedia_functions.get_search_results(search_term)
    return jsonify(top_five_results), 200

@app.route("/get-content/<requested_title>")
def get_content(requested_title):
    title = wikipedia_functions.get_title(requested_title) #String title
    if not title:
        return jsonify({"error" : "Title not found"}), 404
    section_titles = wikipedia_functions.get_section_titles(requested_title) #List of section titles
    sections= wikipedia_functions.get_sections_content(requested_title) # dictionary of section title : content
    summary = wikipedia_functions.get_summary(title)
    page_info = {
        "title" : title,
        "summary" : summary,
        "section_titles" : section_titles,
        "sections" : sections
    }
    return jsonify(page_info), 200



if __name__ == '__main__':
    app.run(debug=True)