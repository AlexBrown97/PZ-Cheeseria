import axios from "axios";
import { server } from "../server";

describe("api", () => {
  const baseUrl = "http://localhost:3000";

  afterAll(() => {
    server.close();
  });

  describe("GET /api", () => {
    const endpoint = `${baseUrl}/api`;

    it("returns HTTP 200", async () => {
      const response = await axios.get(endpoint);

      expect(response.status).toBe(200);
    });
  });
});
