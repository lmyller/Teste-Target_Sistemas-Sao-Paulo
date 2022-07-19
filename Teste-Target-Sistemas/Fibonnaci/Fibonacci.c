#include <stdio.h>

const char NUMERO[9] = "Numero: ";

int lerNumero(const char *mensagem){
    int numero;

    printf("%s", mensagem);
    scanf("%d", &numero);

    return numero;
}

void fibonnaci(){
    int fibonacci = 1, anterior = 0, numero;
    numero = lerNumero(NUMERO);

    for(int indice = 0; indice < numero; indice++) {
			printf("%d\n", fibonacci);
			fibonacci += anterior;
			anterior = fibonacci - anterior;
	}
}

int main(){
    fibonnaci();
}
