import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {

    test("should return repository names for techiesyed", async () => {

        axios.get.mockResolvedValue({

            data: [

                { name: "repo1" },

                { name: "repo2" },

                { name: "repo3" }

            ]

        });

        const result = await GitClient.getRepositories("techiesyed");

        expect(result).toEqual([

            "repo1",

            "repo2",

            "repo3"

        ]);

    });

});