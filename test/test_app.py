from app.main import create_app
from app.router import index


def test_create_app():
    assert create_app(debug=True).debug
    assert not create_app(debug=False).debug


def test_route_index():
    response = index(None)
    assert response.status_code == 200
    assert response.body == b"Hello world"
