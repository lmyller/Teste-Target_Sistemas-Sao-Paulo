SP = 67836.43
RJ = 36678.66
MG = 29229.88
ES = 27165.48
OUTROS = 19849.53

def somar_faturamento():
    return SP + RJ + MG + ES + OUTROS

soma_faturamento = somar_faturamento();
print(f'Faturamento SP: {round(SP / soma_faturamento * 100, 2)}%')
print(f'Faturamento RJ: {round(RJ / soma_faturamento * 100, 2)}%')
print(f'Faturamento MG: {round(MG / soma_faturamento * 100, 2)}%')
print(f'Faturamento ES: {round(ES / soma_faturamento * 100, 2)}%')
print(f'Faturamento OUTROS: {round(OUTROS / soma_faturamento * 100)}%')