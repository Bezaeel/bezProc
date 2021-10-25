import startServer from "@app/ExpressApp";
import Chai from "@test/bootstrap"

let server: any;

describe("/fizzybuzzy endpoint", () => {
    before(async () => {
        server = await startServer;
    });

    describe("POST /1.0/fizzybuzzy/generate", () => {
        it("should return accurate payload response", async () =>{
            const res = await Chai.request(server)
                        .post("/1.0/fizzybuzzy/generate")
                        .send({
                            value: 3
                        });
            res.should.have.status(200);
            res.body.should.eql({
                isSuccess: true,
                data: "Fizz",
                code: 200
            })
        })
    })
})