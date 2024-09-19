import "./MobieClub.css";
import { CursorProps } from "../../App";
import Footer from "../../components/Footer/Footer";

type MobieClubProps = CursorProps;

export default function MobieClub({
  cursorEnter,
  cursorLeave,
}: MobieClubProps) {
  return (
    <>
      <div className="mc-body-container content-breakpoint">
        <h1>MobieClub</h1>
        <div className="mc-section">
          <h2>1. O que é o MobieClub?</h2>
          <p>
            O <b>MobieClub</b> será o programa de assinatura premium do Mobiefy,
            criado para oferecer mais flexibilidade, vantagens e economia em
            suas viagens urbanas. Com o MobieClub, você tem acesso ilimitado a
            viagens, acumula MobieCoins para trocar por benefícios e aproveita
            descontos em serviços parceiros.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            2. Quais são as vantagens de se tornar um assinante do MobieClub?
          </h2>
          <p>
            Ao assinar o MobieClub, você ganhará acesso a diversos benefícios,
            como:
          </p>
          <ul>
            <li>
              <p>Viagens ilimitadas todos os meses, sem restrições.</p>
            </li>
            <li>
              <p>
                Você acumulará MobieCoins, nossa moeda virtual, a cada trajeto,
                que podem ser trocadas por viagens gratuitas.
              </p>
            </li>
            <li>
              <p>
                Descontos e ofertas exclusivas de parceiros, como restaurantes,
                cinemas, e serviços de transporte.
              </p>
            </li>
            <li>
              <p>
                Renovação automática a cada 30 dias, com a possibilidade de
                cancelar a assinatura a qualquer momento, sem complicações.
              </p>
            </li>
          </ul>
        </div>
        <div className="mc-section">
          <h2>
            3. Qual será a diferença entre a versão gratuita do Mobiefy e o
            MobieClub?
          </h2>
          <p>
            A versão gratuita do Mobiefy conta com um limite de 10 viagens por
            mês e acesso a informações e rotas multimodais integradas. Já com o
            MobieClub você pode fazer viagens ilimitadas todos os meses,
            acumular MobieCoins a cada viagem para trocar por recompensas,
            aproveitar descontos e ofertas especiais em serviços parceiros e ter
            mais flexibilidade para personalizar suas rotas e acesso a recursos
            exclusivos do aplicativo.
          </p>
        </div>
        <div className="mc-section">
          <h2>4. Como funcionará a acumulação de MobieCoins?</h2>
          <p>
            Você acumulará MobieCoins automaticamente sempre que completar uma
            viagem usando o Mobiefy. A princípo, você ganhará 1 MobieCoin a cada
            1 real gasto. Estas moedas podem ser trocadas por viagens gratuitas
            dentro do aplicativo ou por outros benefícios no futuro.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            5. Como poderei trocar minhas MobieCoins por viagens gratuitas?
          </h2>
          <p>
            Quando você acumular um número suficiente de MobieCoins, basta ir à
            futura seção de recompensas do aplicativo, selecionar qual tipo de
            viagem você deseja e confirmar a operação. O valor em MobieCoins
            será automaticamente deduzido do seu saldo.
          </p>
        </div>
        <div className="mc-section">
          <h2>6. Quanto custará a assinatura do MobieClub?</h2>
          <p>
            O valor da assinatura mensal do MobieClub varia de acordo com a
            cidade onde você reside e o plano que você escolher. Para conferir
            os preços e planos disponíveis, acesse a aba "MobieClub" no menu
            principal do aplicativo.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            8. Minha assinatura do MobieClub será renovada automaticamente?
          </h2>
          <p>
            Sim, sua assinatura será renovada automaticamente a cada 30 dias,
            cobrando o valor correspondente do método de pagamento que você
            cadastrou. Você poderá cancelar a qualquer momento, e não será
            cobrado para o próximo ciclo.
          </p>
        </div>
        <div className="mc-section">
          <h2>9. Poderei pausar minha assinatura do MobieClub?</h2>
          <p>
            Em seu lançamento, o MobieClub não oferecerá a opção de pausar a
            assinatura. Caso deseje interromper seu uso, você pode cancelar sua
            assinatura e reativá-la quando preferir.
          </p>
        </div>
        <div className="mc-section">
          <h2>10. Poderei usar o MobieClub em outras cidades?</h2>
          <p>
            Assim como o plano gratuito, o MobieClub poderá ser utilizado em
            qualquer cidade da metrópole de São Paulo. Seus benefícios, como
            viagens ilimitadas e o acúmulo de MobieCoins, se aplicam
            independentemente da cidade em que você estiver usando o aplicativo,
            caso esteja na nossa área de atuação.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            13. Os benefícios do MobieClub serão transferíveis para outros
            usuários?
          </h2>
          <p>
            Não. Os benefícios do MobieClub, como viagens ilimitadas e
            MobieCoins, são exclusivos para o titular da assinatura e não podem
            ser transferidos ou compartilhados com outros usuários.
          </p>
        </div>
        <div className="mc-section">
          <h2>15. Como as ofertas de parceiros do MobieClub funcionarão?</h2>
          <p>
            O MobieClub possui parcerias com uma variedade de empresas, como
            restaurantes, lojas e serviços de transporte. Assinantes do
            MobieClub recebrão ofertas exclusivas, como descontos e promoções.
            Para aproveitar as ofertas, bastará acessar a futura seção de
            Ofertas no aplicativo e seguir as instruções específicas para cada
            parceiro.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            16. Poderei combinar MobieCoins com outras formas de pagamento?
          </h2>
          <p>
            em seu lançamento, MobieCoins só poderão ser usadas para trocar por
            viagens gratuitas ou outras recompensas dentro do aplicativo, não
            sendo possível combiná-las com outros meios de pagamento (ex.:
            cartão de crédito).
          </p>
        </div>
        <div className="mc-section">
          <h2>17. Como farei para saber quantos MobieCoins eu tenho?</h2>
          <p>
            Para verificar o saldo de suas MobieCoins, bastará acessar o menu
            principal e ir até a seção "MobieClub". Lá você verá seu saldo atual
            e o histórico de acúmulo e uso das moedas, assim como outras
            informações da sua assinatura.
          </p>
        </div>
        <div className="mc-section">
          <h2>18. Os MobieCoins expirarão?</h2>
          <p>
            Sim, os MobieCoins terão um prazo de validade de 2 anos.
            Certifique-se de usá-los antes que expirem para aproveitar seus
            benefícios.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            19. O que acontecerá se eu cancelar minha assinatura do MobieClub?
          </h2>
          <p>
            Se você cancelar sua assinatura, perderá imediatamente o acesso às
            viagens ilimitadas e às ofertas exclusivas de parceiros. No entanto,
            você poderá continuar usando suas MobieCoins acumuladas até que
            expirem.
          </p>
        </div>
        <div className="mc-section">
          <h2>
            20. Preciso de ajuda. Como posso entrar em contato com o suporte do
            MobieClub?
          </h2>
          <p>
            Se precisar de ajuda com sua assinatura, acúmulo de MobieCoins ou
            qualquer outra questão, entre em contato com nosso suporte através
            do e-mail contato@mobiefy.com. Estamos disponíveis para atender suas
            dúvidas e resolver eventuais problemas.
          </p>
        </div>
      </div>
      <Footer cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
    </>
  );
}
