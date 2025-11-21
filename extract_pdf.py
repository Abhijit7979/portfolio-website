from pypdf import PdfReader
import json

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

pdf_path = "Aiden_ai_abhijit.pdf"
try:
    text = extract_text_from_pdf(pdf_path)
    print(text)
except Exception as e:
    print(f"Error: {e}")
