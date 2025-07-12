<template>
  <footer class="footer">
    <div class="footer__top">
      <section class="contacts">
        <div class="address">
          <p class="address__city">Москва</p>
          <p class="address__street">Ленинская Слобода, 26с15</p>
          <p class="address__phone">+7 (495) 120-19-05</p>
          <p class="address__email">info@lofthall.ru</p>
        </div>
        <div class="address">
          <p class="address__city">Подмосковье</p>
          <p class="address__street">Ленинская Слобода, 26с15</p>
          <p class="address__phone">+7 (495) 120-19-05</p>
          <p class="address__email">info@lofthall.ru</p>
        </div>
        <div class="address">
          <p class="address__city">Санкт-Петербург</p>
          <p class="address__street">Арсенальная набережная, 1</p>
          <p class="address__phone">+7 (812) 317-12-20</p>
          <p class="address__email">spb@lofthall.ru</p>
        </div>
        <div class="work-hours">
          Будни: 10:00—20:00 <br />
          Выходные: 11:00—19:00
        </div>
      </section>
      <section class="socials">
        <BaseButton>Telegram</BaseButton>
        <BaseButton>WhatsApp</BaseButton>
        <BaseButton><Icon name="my-icon:vk" /></BaseButton>
        <BaseButton><Icon name="my-icon:zen" /></BaseButton>
        <BaseButton><Icon name="my-icon:instagram" /></BaseButton>
        <BaseButton><Icon name="my-icon:face" /></BaseButton>
        <div class="work-hours">
          Пишите круглосуточно. <br />
          Ответим в рабочее время
        </div>
      </section>
    </div>
    <div class="footer__bottom">
      <div class="copyright">
        ООО «ЛОФТ ЭВЕНТ ХОЛЛ». Все права защищены. © 2015 — 2022 «LOFT HALL»
        является зарегистрированным товарным знаком. Свидетельство № 777531
        выдано Федеральной службой по интеллектуальной собственности 30.09.2020.
      </div>
      <div class="copyright">
        Юр. адрес: 115280, город Москва, ул. Ленинская Слобода, д. 26, пом.
        II-II, комн. 11 ИНН/КПП: 7725360042 /772501001 ОГРН: 1177746215690
        Перепечатка и любое использование материалов возможно только при наличии
        ссылки на первоисточник.
      </div>
      <div class="buttons">
        <Icon name="my-icon:placebo-logo" />
        <span class="logo-title">Part of Placebo/25</span>
        <BaseButton>Мобильная версия</BaseButton>
        <BaseButton>Скачать лого</BaseButton>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  width: 1210px;
  padding: 0 8px;
  margin: 0 auto;

  .footer__top {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 96px;

    &::after {
      content: "";
      width: 1204px;
      height: 1px;
      background-color: #333333;
      position: absolute;
      bottom: -96px;
    }

    .contacts {
      display: flex;
      position: relative;
      flex-direction: row;
      flex-wrap: wrap;
      width: 755px;
      gap: 27px;

      .address {
        display: flex;
        flex-direction: column;

        .address__city {
          font-size: 22px;
        }

        .address__street {
          color: #7f7f7f;
          font-size: 14px;
          margin-bottom: 18px;
        }
      }

      .work-hours {
        margin-top: 64px;
        font-size: 12px;
        color: #808080;
      }

      &::after {
        content: "";
        width: 1px;
        height: 252px;
        background-color: #333333;
        margin-left: 30px;
        position: absolute;
        right: 0px;
      }
    }
  }

  .footer__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 40px;
    margin-bottom: 100px;

    .copyright {
      width: 300px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      align-self: end;

      .logo-title {
        font-size: 12px;
        color: #565656;
        font-weight: 600;
      }
    }
  }
}
</style>
