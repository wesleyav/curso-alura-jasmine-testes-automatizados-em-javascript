describe("Consulta", function () {

    var guilherme;

    beforeEach(function () {
        // console.log("beforeEach");
        guilherme = new PacienteBuilder().constroi();
    });

    describe("consultas do tipo retorno", function () {
        it("não deve cobrar nada se a consulta for um retorno", function () {
            var consulta = new Consulta(guilherme, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("consultas com procedimento", function () {
        it("deve cobrar 25 por cada procedimento comum", function () {
            var consulta = new Consulta(guilherme, ["proc1", "proc2", "proc3"], false, false);

            expect(consulta.preco()).toEqual(75);
        });

        it("deve cobrar preço específico dependendo do procedimento", function () {
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });




});