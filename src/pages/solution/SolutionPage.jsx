import React, { useEffect } from "react";
import "./solution.scss";
import icon from "../../assets/icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
import FormComponent from "../../components/formComponent/FormComponent";
const SolutionPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="container">
      <div className="solution">
        <div className="solution__block-1" data-aos="fade-up">
          <h1>Решения для застройщиков</h1>
          <p>
            Повысьте лояльность покупателей жилья — установите сенсорное
            управление люками, электронные счётчики для учёта воды и
            электроэнергии.
          </p>
          <ul className="solution__links">
            <li>
              <a href="#block-2">ПРОБЛЕМА</a>
            </li>
            <li>
              <a href="#block-3">РЕШЕНИЕ СЕЙЧАС</a>
            </li>
            <li>
              <a href="#block-4">ЧТО МЫ ПРЕДЛАГАЕМ</a>
            </li>
            <li>
              <a href="#block-5">ПРЕИМУЩЕСТВА ДЛЯ ВАС</a>
            </li>
            <li>
              <a href="#block-6">ПРЕИМУЩЕСТВА ДЛЯ ЖИЛЬЦОВ</a>
            </li>
            <li>
              <a href="#block-7">ОТЛИЧИЯ ОТ КОНКУРЕНТОВ</a>
            </li>
            <li>
              <a href="#block-10">ОТЗЫВЫ О БишкекПрибор</a>
            </li>
            <li>
              <a href="#block-8">ПРИСОЕДИНЯЙТЕСЬ</a>
            </li>
          </ul>
        </div>
        <div id="block-2" className="solution__block-2" data-aos="fade-up">
          <h2>проблема</h2>
          <p>
            Мы знаем, что беспокоит застройщиков. Понимаем, как много забот и
            ответственности ложится на вас:
          </p>
          <div className="solution__list">
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Необходимость ставить приборы учёта</h3>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Отбор устройств по минимальной цене</h3>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Некорректная работа дешёвых приборов учёта</h3>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Жалобы жильцов</h3>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Претензии от ЖКХ</h3>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Конкуренция</h3>
            </div>
          </div>
        </div>
        <div id="block-3" className="solution__block-3" data-aos="fade-up">
          <h2>решение сейчас</h2>
          <p>
            Своими силами справиться сложно, нужны партнёры. Вы стараетесь
            делать какможно лучше:
          </p>
          <div className="solution__list">
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Ищете и находите надёжных подрядчиков.</h3>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>
                Возможно в данный момент уже выбрали оптимальное предложение. Но
                понимаете, что есть недочёты.
              </h3>
            </div>
          </div>
        </div>
        <div id="block-4" className="solution__block-4" data-aos="fade-up">
          <p>
            Предлагаем рассмотреть более надёжное и технологичное решение от
            компании БишкекПрибор с расширенной гарантией и ответственностью за
            результат.
          </p>
        </div>
        <div id="block-5" className="solution__block-5">
          <h2>преимущества для вас</h2>
          <p className="bold">
            5 преимуществ для застройщика: выгоды от автоматизации
          </p>
          <p>
            Устанавливая в домах автоматическую систему учёта и контроля
            ресурсов, вы получаете:
          </p>
          <div className="solution__list">
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Увеличение покупательской способности.</h3>
              <p>
                Дом, который упрощает жизнь владельцам квартир, вызывает
                интерес. Рассказ потенциальной аудитории о планируемых
                инновациях приведёт к увеличению продаж.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Лояльность будущих жильцов.</h3>
              <p>
                Открытость общедомового учёта увеличивает доверие покупателей
                квартир.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Безупречную репутацию.</h3>
              <p>
                Застройщик, установивший автоматические системы учета, заботится
                о комфортной жизни жильцов, что неизбежно приводит к улучшению
                его репутации в глазах клиентов, которая, как известно, легко
                монетизируется.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Возможность оправданно повышать цены.</h3>
              <p>
                Установка инновационного оборудования приведёт к повышению
                статусности жилья, а следовательно и его стоимости.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Безопасность на строительной площадке</h3>
              <p>
                Установка датчиков контроля под крышками колодцев защитит от
                кражи люков и несанкционированного открытия канализационных
                шахт.
              </p>
            </div>
          </div>
        </div>
        <div id="block-6" className="solution__block-6">
          <h2>ПРЕИМУЩЕСТВА ДЛЯ ЖИЛЬЦОВ</h2>
          <p className="bold">
            6 причин, по которым жильцы нуждаются в БишкекПрибор
          </p>
          Автоматические системы учета и контроля ресурсов повышают уровень
          комфорта проживания в доме, обеспечивая прозрачность расчетов и
          безопасность жизни.
          <div className="solution__list">
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Экономия времени.</h3>
              <p>
                Не нужно ежемесячно снимать и передавать показания в управляющую
                компанию и снабжающую организацию. Данные отправляются
                автоматически.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Точность измерений</h3>
              <p>
                Автоматизация системы контроля и передачи показаний исключает
                ошибки. Передаваемые данные всегда на 100% точные.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Удобное получение данных.</h3>
              <p>
                Актуальная информация о расходах в любое время доступна в личном
                кабинете пользователя на сайте или в приложении. .
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Защита от злоумышленников</h3>
              <p>
                Нередко под предлогом снять показания в дома проникают
                мошенники. Автоматическая передача данных лишит преступников
                безотказного инструмента.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Лёгкий монтаж</h3>
              <p>
                Процесс установки не требует дополнительного оборудования и
                специальных знаний.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Безопасность придомовой территории</h3>
              <p>
                Датчик открытия канализационных люков оберегает жителей от
                несчастных случаев и обеспечивает безопасность.
              </p>
            </div>
          </div>
        </div>
        <div id="block-7" className="solution__block-7">
          <p>
            По опросам риелторских агентств: оснащение домов бытовыми
            SMART-системами это третья по значимости причина выбора квартиры.
          </p>
        </div>
        <div id="block-8" className="solution__block-8">
          <h2>Отличия от конкурентов</h2>
          <p className="bold">6 качеств, отличающих нас от конкурентов</p>
          <p>
            Преимущества автоматизации системы учета ресурсов привели к
            энергичному развитию рынка контрольно-измерительного оборудования. 5
            наших отличительных преимуществ помогут сделать правильный выбор.
          </p>
          <div className="solution__list">
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Экономия времени.</h3>
              <p>
                Не нужно ежемесячно снимать и передавать показания в управляющую
                компанию и снабжающую организацию. Данные отправляются
                автоматически.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Точность измерений</h3>
              <p>
                Автоматизация системы контроля и передачи показаний исключает
                ошибки. Передаваемые данные всегда на 100% точные.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Удобное получение данных.</h3>
              <p>
                Актуальная информация о расходах в любое время доступна в личном
                кабинете пользователя на сайте или в приложении. .
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Защита от злоумышленников</h3>
              <p>
                Нередко под предлогом снять показания в дома проникают
                мошенники. Автоматическая передача данных лишит преступников
                безотказного инструмента.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Лёгкий монтаж</h3>
              <p>
                Процесс установки не требует дополнительного оборудования и
                специальных знаний.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Безопасность придомовой территории</h3>
              <p>
                Датчик открытия канализационных люков оберегает жителей от
                несчастных случаев и обеспечивает безопасность.
              </p>
            </div>
          </div>
        </div>
        <div id="block-9" className="solution__block-9">
          <h2>Присоединяйтесь</h2>
          <p className="bold">
            Повышайте качество жизни с умным оборудованием БишкекПрибор
          </p>
          <p>
            Установка приборов автоматического контроля и учета ресурсов —
            эффективный инструмент отстройки от конкурентов.
          </p>
          <p>
            Устанавливайте в домах современные технологичные устройства,
            облегчающие бытовые заботы жильцов, и увеличивайте продажи даже при
            повышении цены на объекты!
          </p>
        </div>
        <div id="block-10" className="solution__block-10">
          <h2>отзывы</h2>
          <p className="bold">
            Узнайте у наших клиентов об опыте использования приборов
          </p>
          <p>
            Вот, что отмечают наши заказчики, как наиболее важные для них
            критерии:
          </p>
          <div className="solution__list">
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Лёгкое масштабирование.</h3>
              <p>
                К 1 базовой станции можно подключить 10-30 обычных БС и мини-БС.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Доступное техническое оснащение</h3>
              <p>
                Нет необходимости в дорогостоящем серверном оборудовании и
                содержании обслуживающего персонала.
              </p>
            </div>
            <div className="solution__item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Безотказная собираемость данных.</h3>
              <p>
                Отказ одного прибора не влияет на работу других счётчиков
                системы. Мгновенное информирование о неисправности.
              </p>
            </div>
          </div>
        </div>
        {/* <Form /> */}
        <FormComponent />
      </div>
    </section>
  );
};

export default SolutionPage;
