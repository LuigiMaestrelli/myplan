const rewire = require("rewire")
const index = rewire("./index")
const createNotification = index.__get__("createNotification")
// @ponicode
describe("createNotification", () => {
    test("0", () => {
        let callFunction = () => {
            createNotification("generate bluetooth firewall")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createNotification("synthesize wireless microchip")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createNotification("reboot neural card")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createNotification("transmit bluetooth bus")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createNotification("parse mobile firewall")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createNotification(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
