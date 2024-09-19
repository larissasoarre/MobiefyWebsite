import "./TermsAndConditions.css";
import { CursorProps } from "../../App";
import Footer from "../../components/Footer/Footer";

type TermsAndConditionsProps = CursorProps;

export default function TermsAndConditions({
  cursorEnter,
  cursorLeave,
}: TermsAndConditionsProps) {
  return (
    <>
      <div className="tac-body-container content-breakpoint">
        <h1>Termos de Uso</h1>
        <div className="tac-section">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar o aplicativo Mobiefy, você concorda em cumprir e
            estar vinculado a estes Termos de Uso. Se você não concorda com os
            Termos, por favor, interrompa o uso do aplicativo imediatamente.
          </p>
        </div>
        <div className="tac-section">
          <h2>2. Alterações nos Termos</h2>
          <p>
            O Mobiefy se reserva o direito de modificar os Termos de Uso a
            qualquer momento. Quaisquer alterações serão comunicadas por meio do
            aplicativo ou por e-mail. O uso continuado do aplicativo após tais
            modificações constituirá sua aceitação dos Termos revisados.
          </p>
        </div>
        <div className="tac-section">
          <h2>3. Uso do Serviço</h2>
          <h3>3.1 Elegibilidade</h3>
          <p>
            Para usar o Mobiefy, você deve ter pelo menos 18 anos ou a idade
            mínima legal em sua jurisdição. Se você for menor de idade, deve
            obter o consentimento de seus pais ou responsáveis.
          </p>
          <h3>3.2 Licença de Uso</h3>
          <p>
            Concedemos a você uma licença limitada, não exclusiva,
            intransferível e revogável para acessar e usar o aplicativo de
            acordo com estes Termos.
          </p>
          <h3>3.3 Responsabilidades do Usuário</h3>
          <p>Você concorda em:</p>
          <ul>
            <li>
              <p>
                Usar o Mobiefy apenas para fins lícitos e em conformidade com a
                legislação aplicável.
              </p>
            </li>
            <li>
              <p>Não tentar acessar informações ou sistemas não autorizados.</p>
            </li>
            <li>
              <p>
                Fornecer informações precisas ao criar uma conta e manter seus
                dados de cadastro atualizados.
              </p>
            </li>
          </ul>
        </div>
        <div className="tac-section">
          <h2>4. Coleta e Uso de Dados</h2>
          <p>
            O Mobiefy coleta e utiliza informações pessoais, incluindo dados de
            localização e informações sobre seu dispositivo, conforme descrito
            na{" "}
            <a
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              href="https://github.com/beatriznonato"
            >
              Política de Privacidade
            </a>
            . O uso do aplicativo implica na aceitação dessas práticas.
          </p>
        </div>
        <div className="tac-section">
          <h2>5. Funcionalidades do Aplicativo</h2>
          <h3>5.1 Rotas Multimodais</h3>
          <p>
            O Mobiefy integra informações de diversos serviços de transporte,
            como transporte público, corridas por aplicativo, bicicletas e
            patinetes, permitindo que você planeje sua rota de forma eficiente.
          </p>
          <h3>5.2 Emergência</h3>
          <p>
            O aplicativo permite que você configure um contato de emergência. Ao
            acionar o botão de emergência, o Mobiefy tentará ligar para o
            contato salvo.
          </p>
        </div>
        <div className="tac-section">
          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todos os direitos sobre o conteúdo e a tecnologia do Mobiefy,
            incluindo logotipos, designs, gráficos e código-fonte, são de
            propriedade de{" "}
            <a
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              href="https://github.com/beatriznonato"
            >
              Beatriz Nonato
            </a>{" "}
            e{" "}
            <a
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              href="https://github.com/larissasoarre"
            >
              Larissa Soares
            </a>
            . Você não pode copiar, modificar ou redistribuir o conteúdo sem
            nossa permissão expressa.
          </p>
        </div>
        <div className="tac-section">
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            O Mobiefy é fornecido "como está", sem garantias de qualquer tipo.
            Não nos responsabilizamos por erros ou interrupções no serviço, nem
            por qualquer dano resultante do uso ou incapacidade de usar o
            aplicativo.
          </p>
        </div>
        <div className="tac-section">
          <h2>8. Lei Aplicável e Foro</h2>
          <p>
            Estes Termos serão regidos pelas leis do Brasil. Qualquer litígio
            será submetido ao foro da comarca de São Paulo.
          </p>
        </div>
      </div>
      <Footer cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
    </>
  );
}
