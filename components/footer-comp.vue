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
      <section class="top-right">
        <section class="socials">
          <div class="socials__buttons">
            <div class="tg-wa-buttons">
              <BaseButton variant="small">Telegram</BaseButton>
              <BaseButton variant="small">WhatsApp</BaseButton>
            </div>
            <div class="icons">
              <div class="icon-decorator">
                <Icon name="my-icon:vk" size="8px" />
              </div>
              <div class="icon-decorator">
                <Icon name="my-icon:zen" size="14px" />
              </div>
              <div class="icon-decorator">
                <Icon name="my-icon:instagram" size="13px" />
              </div>
              <div class="icon-decorator">
                <Icon name="my-icon:face" size="14px" />
              </div>
            </div>
          </div>
        </section>
        <div class="write-anytime">
          Пишите круглосуточно. <br />
          Ответим в рабочее время
        </div>
      </section>
    </div>
    <div class="footer__bottom">
      <div class="copyright-wrapper">
        <div class="copyright">
          <p>
            ООО «ЛОФТ ЭВЕНТ ХОЛЛ».<br />
            Все права защищены. © 2015 — 2022
          </p>

          <p>
            «LOFT HALL» является зарегистрированным<br />
            товарным знаком.
          </p>

          <p>
            Свидетельство № 777531 выдано<br />
            Федеральной службой по интеллектуальной<br />
            собственности 30.09.2020.
          </p>
        </div>
        <div class="copyright">
          <p>
            Юр. адрес: 115280, город Москва, ул. Ленинская <br />
            Слобода, д. 26, пом. II-II, комн. 11
          </p>
          <p>
            ИНН/КПП: 7725360042 /772501001 <br />
            ОГРН: 1177746215690
          </p>
          <p>
            Перепечатка и любое использование материалов <br />возможно только
            при наличии ссылки на <br />
            первоисточник.
          </p>
        </div>
      </div>
      <div class="buttons">
        <div class="logo-container">
          <Icon name="my-icon:placebo-logo" size="24px" />
          <span class="logo-title">Part of Placebo/25</span>
        </div>
        <BaseButton variant="tiny">Мобильная версия</BaseButton>
        <BaseButton variant="tiny">Скачать лого</BaseButton>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  width: 1210px;
  padding: 0 8px;
  margin: 0 auto;

  .socials {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 50px;
  }

  .write-anytime {
    font-size: 12px;
    color: #808080;
    margin-top: 18px;
  }

  .socials__buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 33px;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  .footer__top {
    display: flex;
    gap: 64px;
    flex-direction: row;
    position: relative;
    margin-bottom: 140px;

    .icon-decorator {
      display: inline;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.09);
      display: flex;
      place-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.8);
      }
    }

    &::after {
      content: "";
      width: 1204px;
      height: 1px;
      background-color: #333333;
      position: absolute;
      bottom: -140px;
    }

    .contacts {
      display: flex;
      position: relative;
      flex-direction: row;
      flex-wrap: wrap;
      width: 755px;
      column-gap: 55px;

      .address {
        display: flex;
        flex-direction: column;

        .address__city {
          font-size: 22px;
          font-weight: 600;
        }

        .tg-wa-buttons {
          display: flex;
          width: 190px;
          justify-content: space-between;
        }

        .address__street {
          color: #7f7f7f;
          font-size: 14px;
          margin-bottom: 18px;
          font-weight: 400;
        }

        .address__phone,
        address__email {
          font-size: 14px;
          font-weight: 400;
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
        position: absolute;
        right: 0px;
      }
    }
  }

  .footer__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 100px;

    .copyright {
      width: 300px;
      font-size: 12px;
      color: #565656;

      p {
        margin-bottom: 1rem;
      }
    }
  }

  .copyright-wrapper {
    display: flex;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    buttons {
      width: 100%;
    }

    .logo-title {
      font-size: 12px;
      color: #565656;
      font-weight: 600;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 45px;
    align-self: center;
  }
}
</style>
