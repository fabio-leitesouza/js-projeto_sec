while True:
    print("\nMENU")
    print("1 - Somar dois números")
    print("2 - Subtrair dois números")
    print("3 - Multiplicar dois números")
    print("4 - Dividir dois números")
    print("5 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao in ['1', '2', '3', '4']:
        try:
            a = float(input("Digite o primeiro número: "))
            b = float(input("Digite o segundo número: "))

            if opcao == '1':
                print(f"Resultado: {a + b}")
            elif opcao == '2':
                print(f"Resultado: {a - b}")
            elif opcao == '3':
                print(f"Resultado: {a * b}")
            elif opcao == '4':
                if b == 0:
                    print("Erro: divisão por zero não é permitida.")
                else:
                    print(f"Resultado: {a / b}")
        except ValueError:
            print("Erro: você deve digitar números válidos.")
    elif opcao == '5':
        print("Saindo do programa.")
        break
    else:
        print("Opção inválida. Tente novamente.")
