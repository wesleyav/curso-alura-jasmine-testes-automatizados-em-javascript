describe("Agendamento", function () {

    var gui;
    var agenda;

    beforeEach(function () {
        gui = new PacienteBuilder().constroi();
        agenda = new Agendamento();
    });

    it("deve agendar para 20 dias depois", function () {

        var consulta = new Consulta(gui, [], false, false, new Date(2014, 7, 1));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
    });

    it("deve pular fins de semana", function () {

        var consulta = new Consulta(gui, [], false, false, new Date(2014, 5, 30));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 6, 21).toString());
    });


});