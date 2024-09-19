import "./PrivacyPolicy.css";
import { CursorProps } from "../../App";
import Footer from "../../components/Footer/Footer";

type PrivacyPolicyProps = CursorProps;

export default function PrivacyPolicy({
  cursorEnter,
  cursorLeave,
}: PrivacyPolicyProps) {
  return (
    <>
      <div className="pp-body-container content-breakpoint">
        <h1>Política de Privacidade</h1>
        <div className="pp-section">
          <h2>1. Informações Coletadas</h2>
          <p>
            O Mobiefy coleta as seguintes informações pessoais dos usuários:
          </p>
          <ul>
            <li>
              <p>Nome completo</p>
            </li>
            <li>
              <p>Endereço de e-mail</p>
            </li>
            <li>
              <p>Data de nascimento</p>
            </li>

            <li>
              <p>Gênero</p>
            </li>
            <li>
              <p>Pronomes (opcional)</p>
            </li>
            <li>
              <p>Cidade de residência</p>
            </li>
            <li>
              <p>Deficiência física (se houver)</p>
            </li>
            <li>
              <p>Nome e número do contato de emergência</p>
            </li>
            <li>
              <p>Dados de localização</p>
            </li>
          </ul>
          <p>
            Também coletamos automaticamente dados sobre seu dispositivo,
            incluindo endereço IP e informações de navegação.
          </p>
        </div>
        <div className="pp-section">
          <h2>2. Finalidade da Coleta de Dados</h2>
          <p>Utilizamos os dados coletados para:</p>
          <ul>
            <li>
              <p>Prover e personalizar a experiência de uso do aplicativo.</p>
            </li>
            <li>
              <p>
                Melhorar nossas funcionalidades, incluindo rotas e serviços de
                transporte.
              </p>
            </li>
            <li>
              <p>
                Atender à necessidade de segurança através do botão de
                emergência.
              </p>
            </li>
            <li>
              <p>
                Analisar o comportamento dos usuários para aprimorar o
                aplicativo.
              </p>
            </li>
          </ul>
        </div>

        <div className="pp-section">
          <h2>3. Compartilhamento de Dados</h2>
          <p>
            Nós não compartilhamos suas informações pessoais com terceiros,
            exceto:
          </p>
          <ul>
            <li>
              <p>
                Com provedores de serviços que auxiliam no funcionamento do
                aplicativo (ex.: Google Maps API).
              </p>
            </li>
            <li>
              <p>
                Em conformidade com obrigações legais, como solicitações
                governamentais ou judiciais.
              </p>
            </li>
          </ul>
        </div>
        <div className="pp-section">
          <h2>4. Segurança dos Dados</h2>
          <p>
            Tomamos medidas técnicas e organizacionais adequadas para proteger
            seus dados pessoais contra acessos não autorizados, alterações ou
            perda.
          </p>
        </div>
        <div className="pp-section">
          <h2>5. Direitos dos Usuários</h2>
          <p>Conforme a LGPD, você tem os seguintes direitos:</p>
          <ul>
            <li>
              <p>Acessar, corrigir ou excluir seus dados pessoais. </p>
            </li>
            <li>
              <p>
                Retirar seu consentimento para o tratamento de dados a qualquer
                momento.
              </p>
            </li>
            <li>
              <p>
                Solicitar informações sobre o compartilhamento de seus dados.
              </p>
            </li>
          </ul>
          <p>
            Para exercer esses direitos, entre em contato pelo e-mail:
            contato@mobiefy.com.
          </p>
        </div>
        <div className="pp-section">
          <h2>6. Dados de Localização</h2>
          <p>
            O Mobiefy usa sua localização em tempo real para fornecer rotas e
            informações sobre transportes disponíveis. Esse dado é essencial
            para o funcionamento do aplicativo e só é coletado mediante seu
            consentimento.
          </p>
        </div>
        <div className="pp-section">
          <h2>7. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            O aplicativo pode utilizar cookies e tecnologias similares para
            melhorar sua experiência de navegação e coletar dados estatísticos.
            Você pode desativar cookies nas configurações de seu dispositivo,
            mas isso pode limitar a funcionalidade do aplicativo.
          </p>
        </div>
        <div className="pp-section">
          <h2>8. Retenção de Dados</h2>
          <p>
            Mantemos suas informações pessoais pelo período necessário para
            fornecer o serviço ou conforme exigido por lei. Após esse período,
            seus dados serão excluídos ou anonimizados.
          </p>
        </div>
        <div className="pp-section">
          <h2>9. Alterações à Política de Privacidade</h2>
          <p>
            Reservamo-nos o direito de modificar esta Política de Privacidade a
            qualquer momento. Notificaremos sobre mudanças significativas
            através do aplicativo ou por e-mail.
          </p>
        </div>
        <div className="pp-section">
          <h2>10. Contato</h2>
          <p>
            Se você tiver dúvidas ou solicitações sobre sua privacidade ou
            proteção de dados, entre em contato conosco através do e-mail:
            contato@mobiefy.com.
          </p>
        </div>
      </div>
      <Footer cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
    </>
  );
}

<div className="pp-section">
  <h2>4. Segurança dos Dados</h2>
  <p>
    Tomamos medidas técnicas e organizacionais adequadas para proteger seus
    dados pessoais contra acessos não autorizados, alterações ou perda.
  </p>
</div>;
