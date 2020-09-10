describe("Paciente", function () {

    it("deve calcular o imc", function () {

        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
    });

    it("deve calcular os batimentos cardíacos", function () {

        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        expect(guilherme.batimentos()).toEqual(1177344000);
    });
});