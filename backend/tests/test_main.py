from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to Abhijit's Portfolio API"}

def test_get_resume():
    response = client.get("/api/resume")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "S. Abhijit Rao"
    assert len(data["projects"]) > 0

def test_get_projects():
    response = client.get("/api/projects")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_contact():
    response = client.post("/api/contact", json={
        "name": "Test User",
        "email": "test@example.com",
        "message": "Hello"
    })
    assert response.status_code == 200
    assert response.json()["status"] == "success"
