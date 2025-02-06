import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Worldbit</title>
        <meta charset="UTF-8" />
        <meta
          name="facebook-domain-verification"
          content="3jscvmn2sa61q8uzwtlewln9sefhwm"
        />
      </Head>
      <header>
        <h1>Nome da sua empresa</h1>
        <nav>
          <a href="#sobre-nos">Sobre nós</a>
          <a href="#termos-de-uso">Termos de uso</a>
          <a href="#politica-de-privacidade">Política de privacidade</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="sobre-nos">
        <h2>Sobre nós</h2>
        <p>
          Fornecemos serviços de gerenciamento de horários com o compromisso de
          facilitar a vida de nossos usuário para durante seu dia-a-dia
          fornecendo um sistema de cadastro de usuario e gerenciamento de
          horários marcados.
        </p>
        <p>
          Não nos passamos por outra empresa e informamos claramente a natureza
          dos nossos negócios.
        </p>
      </section>

      <section id="termos-de-uso">
        <h2>Termos de uso</h2>
        <p>
          Ao utilizar nossos serviços, você concorda com os seguintes termos:
        </p>
        <ul>
          <li>Você deve ter 18 anos ou mais para usar nossos serviços.</li>
          <li>
            Você é responsável por manter a confidencialidade da sua conta.
          </li>
          <li>Não nos responsabilizamos por mau uso.</li>
        </ul>
        <p>
          Leia nossos{' '}
          <a href="https://worldbit.com.br/termos">termos de uso completos</a>{' '}
          para mais detalhes.
        </p>
      </section>

      <section id="politica-de-privacidade">
        <h2>Política de privacidade</h2>
        <p>
          Respeitamos a sua privacidade e nos comprometemos a proteger suas
          informações pessoais.
        </p>
        <p>
          Coletamos apenas as informações necessárias para fornecer nossos
          serviços e não compartilhamos seus dados com terceiros sem o seu
          consentimento, a menos que exigido por lei.
        </p>
        <p>
          Leia nossa{' '}
          <a href="https://worldbit.com.br/privacidade">
            política de privacidade completa
          </a>{' '}
          para mais detalhes.
        </p>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>Entre em contato conosco através dos seguintes canais:</p>
        <ul>
          <li>Email: lucas.apereira20@gmail.com</li>
          <li>Telefone: +5551985633632</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 WorldBit</p>
      </footer>
    </div>
  );
}

export default Home;
