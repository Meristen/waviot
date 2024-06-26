import React, { useEffect } from "react";
import tehno2 from "../../assets/tehno2.svg";
import icon from "../../assets/icon.png";
import tech from "../../assets/tech.svg";
import tech2 from "../../assets/tech-2.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./technologies.scss";
import FormComponent from "../../components/formComponent/FormComponent";

const TechnologiesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="container">
      <div className="tehno">
        <div className="tehno__block-1" data-aos="fade-up">
          <div className="tehno__info">
            <h1>Технологии БишкекПрибор</h1>
            <p>
              Мы предлагаем новый протокол радиосвязи, разработанный
              исключительно для устройств и крупных распределённых беспроводных
              сетей телеметрии.
            </p>
            <ul className="solution__links">
              <li>
                <a href="#block-2">ПРИНЦИП РАБОТЫ</a>
              </li>
              <li>
                <a href="#block-3">ИНТЕРНЕТ ВЕЩЕЙ</a>
              </li>
              <li>
                <a href="#block-4">LPWAN</a>
              </li>
              <li>
                <a href="#block-5">ХАРАКТЕРИСТИКИ</a>
              </li>
              <li>
                <a href="#block-6">БАЗОВЫЕ СТАНЦИИ</a>
              </li>
              <li>
                <a href="#block-7">БЕЗОПАСНОСТЬ</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="block-2" className="tehno__block-2" data-aos="fade-up">
          <h3>Принцип работы</h3>
          <p>
            Подход, используемый для передачи данных в сeти БишкекПРИБОР очень
            похож на принцип работы сотовых сетей.
          </p>
          <p>
            Счетчики и сенсоры, подключенные к модемам БишкекПРИБОР, либо
            устройства с уже интегрированными радиомодулями, передают показания
            в интернет через базовую станцию. Далее на серверах БишкекПрибор
            данные обрабатываются и предоставляются в удобном виде в специально
            разработанном веб-интерфейсе. Обратный канал связи позволяет
            управлять отдельными приборами и устройствами удаленно.
          </p>
          <p>
            Однако, в отличие от технологии мобильной связи, БишкекПрибор
            использует свой собственный протокол, который позволяет передавать
            данные на десятки километров и обеспечивает автономность работы
            датчиков свыше 10 лет без замены питания.
          </p>
          <div className="tehno__working-img">
            <img src={tehno2} alt="" />
          </div>
        </div>
        <div id="block-3" className="tehno__block-3" data-aos="fade-up">
          <h3>Интернет вещей</h3>
          <p>
            Интернет Вещей (Internet of Things, IoT) от БишкекПРИБОР –
            отлаженные с годами системы дистанционного взаимодействия и обмена
            данными между устройствами и людьми через интернет в любом месте и в
            любое время.
          </p>
          <p>
            Системы Интернета Вещей БишкекПРИБОР включают в себя различные типы
            датчиков и приборов, беспроводные сети с широким покрытием и
            стабильным обслуживанием большого количества устройств, защищенное
            серверное программное обеспечение с возможностью интеграции в
            инфраструктуру клиента и удобный пользовательский интерфейс.
          </p>
          <div className="tehno__properties">
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <p>
                Поддержка всех типов приборов учета энергоресурсов
                (электроэнергия, вода, газ, тепло)
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <p>
                API для взаимодействия со сторонними приложениями, ИТ-системами
                и ИВК верхнего уровня
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <p>
                Сквозная поддержка процессов учета потребления энергоресурсов,
                от приборов учета до системы БишкекПрибор MDM («Личный кабинет»)
                и сторонних приложений
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <p>
                Поддержка команд управления устройствами, включая управление
                реле нагрузки, обновление тарифного расписания для счетчиков
                электрической энергии
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <p>
                Доступность сводных отчетов по узлам учета и отчетов по каждому
                устройству в форматах Excel и CSV с различной детализацией
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <p>
                Гибкое управление ролями и правами пользователей, возможность
                предоставления индивидуального доступа к системе каждому
                потребителю
              </p>
            </div>
          </div>
        </div>
        <div id="block-4" className="tehno_block-4" data-aos="fade-up">
          <h3>LPWAN</h3>
          <p>
            Технология LPWAN обеспечивает энергоэффективную передачу данных
            набольшие расстояния. БишкекПрибор, используя подход LPWAN, создает
            устройства, способные передавать информацию на десятки километров и
            при этом работать в течение нескольких лет на одной батарее.
          </p>
          <p>
            Существующие беспроводные технологии не способны обеспечить
            потребности отдельных приложений в передаче небольших по объему
            данных на дальние расстояния при высокой автономности и низкой
            стоимости подключения. Как правило, такие приложения относятся к
            области межмашинного взаимодействия и Интернета Вещей.
          </p>
          <p>
            LPWAN — это технология, поддерживающая совершенно новый класс
            телематических устройств. Ее появление стало возможным благодаря
            развитию компонентной базы: радиомодулей и приемопередающего
            оборудования.
          </p>
          <div className="img">
            <img src={tech} alt="" />
          </div>
        </div>
        <div id="block-5" className="tehno__block-5" data-aos="fade-up">
          <h3>Характеристики</h3>
          <p>
            NB-Fi стандарт поддерживает двухстороннюю связь с NB-Fi
            устройствами. В первую очередь это применимо для счетчиков
            электрической энергии, в которых обратный канал (Downlink) необходим
            для управления счетчиком – синхронизации времени, обновления
            тарифного расписания, отключения реле нагрузки. Применение NB-Fi
            чипов в устройствах, в которых реализованы разработанные компанией
            БишкекПрибор алгоритмы приема сигналов, обеспечивают практически
            симметричный канал связи в обоих направлениях (как Uplink, так и
            Downlink).
          </p>
          <p>
            Все устройства БишкекПрибор с двухсторонней связью поддерживают
            адаптивное изменение скорости передачи сигнала — при хорошем уровне
            приема сигнала устройства автоматически переходят на более высокую
            скорость передачи данных, что позволяет не только освободить эфир,
            но и дополнительно снизить электропотребление на стороне абонента.
          </p>
          <p>Технические характеристики стандарта NB-Fi (для Uplink-пакетов)</p>
          <div className="list">
            <div className="block-5__item">
              <div className="item-title">
                <h4>Техника модуляции</h4>
              </div>
              <div className="item-inner">DBPSK (ОФМн-2)</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Скорость передачи данных</h4>
              </div>
              <div className="item-inner">50, 400, 3200, 25 600 бит/с</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Метод разделения каналов</h4>
              </div>
              <div className="item-inner">Частотный</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Класс точности</h4>
              </div>
              <div className="item-inner">Класс С</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>
                  Количество одновременно принимаемых каналов в полосе рабочих
                  частот 51,2 кГц
                </h4>
              </div>
              <div className="item-inner">
                1 024 (для скорости 50 бит/c)
                <br /> 128 (для скорости 400 бит/c)
                <br /> 6 (для скорости 3 200 бит/c) <br /> 2 (для скорости 25
                600 бит/c)
              </div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Предельная чувствительность приема сигнала</h4>
              </div>
              <div className="item-inner">
                -148 дБм (для скорости 50 бит/c)
                <br /> -141 дБм (для скорости 400 бит/c)
                <br /> -132 дБм (для скорости 3 200 бит/c)
                <br /> -123 дБм (для скорости 25 600 бит/c)
              </div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>
                  Предельная пропускная способность приема UPLINK-пакетов одной
                  базовой станцией
                </h4>
              </div>
              <div className="item-inner">20 Мбит/сутки</div>
            </div>
            <hr />
            <p>
              Технические характеристики MAC- и транспортного уровня протокола
              NB-Fi
            </p>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Номерная емкость сети</h4>
              </div>
              <div className="item-inner">4,3 млрд устройств (232)</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Эффективные скорости передачи данных (UPLINK-пакет)</h4>
              </div>
              <div className="item-inner">10, 80, 640, 5120 бит/с</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Эффективные скорости передачи данных (DOWNLINK-пакет)</h4>
              </div>
              <div className="item-inner">
                В зависимости от реализации конкретного радиотрансивера
              </div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Используемый алгортим шифрования</h4>
              </div>
              <div className="item-inner">
                «Магма» (алгоритм симметричного блочного шифрования согласно
                ГОСТ Р 34.12-2015)
              </div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Длина ключа шифрования</h4>
              </div>
              <div className="item-inner">256 бит</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>Длина полезных данных одного пакета (payload)</h4>
              </div>
              <div className="item-inner">8 байт</div>
            </div>
            <div className="block-5__item">
              <div className="item-title">
                <h4>
                  Максимальная длина пакета данных транспортного уровня
                  протокола
                </h4>
              </div>
              <div className="item-inner">240 байт</div>
            </div>
          </div>
          <div className="tehno__list">
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Исключительная чувствительность приемника</h3>
              <p>
                Поддержка всех типов приборов учета энергоресурсов:
                электроэнергия, вода, газ.
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Криптографическая защита протокола NB-Fi</h3>
              <p>
                Конфиденциальность и целостность информации при передаче и
                обработке благодаря шифрованию.
              </p>
            </div>
            <div className="tehno__properties-item">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3>Возможность построения большой сети</h3>
              <p>Проверенная концепция строительства масштабируемых сетей.</p>
            </div>
          </div>
        </div>
        <div id="block-6" className="tehno__block-6" data-aos="fade-up">
          <h3>Базовые станции</h3>
          <p>
            Ключевая возможность высокочувствительного приемника базовой станции
            NB-Fi – это способность принимать сигнал с низким SNR, вплоть до
            нуля, т.е., когда уровень сигнала не превышает уровень шума. В
            базовых станциях применяются самые современные фильтры, которые
            позволяют обеспечить непревзойденный уровень динамического
            диапазона.
          </p>
          <p>
            Базовая станция NB-Fi в один момент времени может обрабатывать сотни
            и тысячи каналов, в реальном времени оцифровывая всю полосу частот и
            одновременно принимая сообщения, отправленные на разных скоростях.
          </p>
          <div className="station-img">
            <img src={tech2} alt="" />
          </div>
        </div>
        <div id="block-7" className="tehno__block-7" data-aos="fade-up">
          <h3>Безопасность</h3>
          <p>
            Протокол беспроводной передачи данных NB-Fi для защищенного обмена
            данными между конечным устройством и сервером позволяет надежно
            обеспечить конфиденциальность и целостность передаваемой информации.
          </p>
          <p>
            Для обеспечения криптографической защиты информации на уровне
            представления используется схема, схожая с схемой транспортного
            уровня. При этом, никакие ключи, используемые на транспортном
            уровне, не могут быть использованы на уровне представления, также
            невозможно отключить шифрование или выполнить смену алгоритма
            шифрования.
          </p>
          <p>
            Обмен информацией между пользователем и IoT-платформой БишкекПрибор
            («Личным кабинетом», системой HES) защищен шифрованием по протоколу
            HTTPS/SSL. Для пользователей, имеющим доступ к командам управления
            устройствами, возможно настроить дополнительную двухфакторную
            авторизацию.
          </p>
        </div>

        <FormComponent />
      </div>
    </section>
  );
};

export default TechnologiesPage;
