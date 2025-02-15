'Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:'

'- A maior e a menor altura do grupo;'
'- A média de altura das pessoas do gênero Masculino;'
'- O número de pessoas do gênero Feminino.'

lista_homens = []
lista_mulheres=[]

for i in range(15):

    Genero = input('Digite o seu Gênero(m - para Masculino ou f - para Feminino): ')
    
    
    if Genero == 'm':
        altura = float(input('Digite sua altura: '))
        lista_homens.append(altura)
    else:
        altura = float(input('Digite sua altura: '))
        lista_mulheres.append(altura)
            

print('\n------------------------Maior e Menor altura de cada Grupo------------------------\n')

altura_max_homens = max(lista_homens)
altura_min_homens = min(lista_homens)
altura_max_mulheres = max(lista_mulheres)
altura_min_mulheres = min(lista_mulheres)

print(f'Maior altura do grupo masculino: {altura_max_homens}   | Menor altura: {altura_min_homens}')
print(f'Maior altura do grupo feminino:  {altura_max_mulheres} | Menor valor: {altura_min_mulheres}')
  
print('\n------------------------Média do grupo Masculino-----------------------------------\n')

media_homens = sum(lista_homens)/len(lista_homens)

print(f'A média da altura do gurpo masculinas é {media_homens}')

print('\n------------------------Número de pessoa(s) do gênero Feminino----------------------\n')

print(f'São {len(lista_mulheres)} pessoa(s) do gênero feminino!')

