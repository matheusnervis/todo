import pytest
from httpx import AsyncClient

from app.main import create_app


def test_create_app():
    assert create_app(debug=True).debug
    assert not create_app(debug=False).debug


@pytest.mark.anyio
async def test_route_index():
    async with AsyncClient(app=create_app(), base_url="http://test") as ac:
        response = await ac.get("/")
    assert response.status_code == 200
    # assert response.body == b"Hello world"
