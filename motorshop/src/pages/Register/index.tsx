import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Register() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-grey-300">
        <div>
          <Header />
        </div>
        <main>
          <form>
            <h1>Cadastro</h1>

            <p>Informações pessoais</p>

            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Ex: Vagner Love" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Ex: example@mail.com" />

            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" placeholder="Ex: 000.000.000-00" />

            <label htmlFor="phoneNumber">Celular</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="(DDD) 90000-0000"
            />

            <label htmlFor="dateBirth">Data de nascimento</label>
            <input type="text" id="dateBirth" placeholder="00/00/00" />

            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              placeholder="Digitar descrição"
            />

            <p>Informações de endereço</p>

            <label htmlFor="zipCode">CEP</label>
            <input type="text" id="zipCode" placeholder="00000-000" />

            <div>
              <div>
                <label htmlFor="state">Estado</label>
                <input type="text" id="state" placeholder="Digitar Estado" />
              </div>

              <div>
                <label htmlFor="city">CIdade</label>
                <input type="text" id="city" placeholder="Digitar Cidade" />
              </div>
            </div>

            <label htmlFor="street">Rua</label>
            <input type="text" id="street" placeholder="Digitar rua" />

            <div>
              <div>
                <label htmlFor="number">Numero</label>
                <input type="text" id="number" placeholder="Digitar numero" />
              </div>

              <div>
                <label htmlFor="complement">Complemento</label>
                <input
                  type="text"
                  id="complement"
                  placeholder="Ex: apartamento"
                />
              </div>
            </div>

            <label htmlFor="typeUser">Tipo de conta</label>
            <select name="typeUser" id="typeUser">
              <option value="buyer">Comprador</option>
              <option value="advertiser">Anunciante</option>
            </select>

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digitar senha" />

            <label htmlFor="passwordConf">Confirmar senha</label>
            <input
              type="password"
              id="passwordConf"
              placeholder="Digitar senha"
            />

            <button type="submit">Finalizar Cadastro</button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
}
