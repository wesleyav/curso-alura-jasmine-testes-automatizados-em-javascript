describe("MaiorEMenor", function () {
    it("deve entender números em ordem não sequencial", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5, 15, 7, 9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem crescente", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,6,7,8]);

        expect(algoritmo.pegaMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem decrescente", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([8,7,6,5]);

        expect(algoritmo.pegaMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender array com um elemento", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([9]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(9);
});
});