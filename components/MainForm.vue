<template>
  <article class="form-wrap">
    <form class="form">
      <div class="item required-field">
        <p>Наименование товара</p>
        <label for="name" class="label">
          <p>Введите наименование товара</p>
          <input id="name" class="field" type="text">
        </label>
      </div>

      <div class="item">
        <p>Описание товара</p>
        <label for="description" class="label">
          <p>Введите описание товара</p>
          <textarea id="description" class="field textarea" type="text" />
        </label>
      </div>

      <div class="item required-field">
        <p>Ссылка на изображение товара</p>
        <label for="link" class="label">
          <p>Введите ссылку</p>
          <input id="link" class="field" type="text">
        </label>
      </div>

      <div class="item required-field">
        <p>Цена товара</p>
        <label for="price" class="label">
          <p>Введите цену</p>
          <input id="price" class="field warn_active" type="text">
        </label>
      </div>

      <button class="button button_active">
        Добавить товар
      </button>
    </form>
  </article>
</template>

<script>
export default {
  name: 'MainForm'
}

</script>

<style lang="scss" scoped>
  .form-wrap {
    position: sticky;
    top: 24px;
    margin: 16px;

    @media (max-width: 767px) {
      position: static;
    }

    .form {
      padding: 24px;
      width: 332px;
      background: #FFFEFB;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;

      @media (max-width: 374px) {
        width: 300px;
      }

      .item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &:last-child {
          margin-bottom: 8px;
        }

        > p {
          position: relative;
          margin-bottom: 4px;
          font-size: 10px;
          line-height: 13px;
          letter-spacing: -0.02em;
          color: #49485E;
        }

        > .label {
          position: relative;
          width: 100%;
          font-size: 12px;
          line-height: 15px;

          > .field {
            margin-bottom: 16px;
            padding: 0 16px;
            width: 100%;
            height: 36px;

            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 4px;

            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            color: #3F3F3F;

            &:focus {
              outline: 1px solid #DCDCDC;
            }
          }

          > p {
            position: absolute;
            top: 11px;
            left: 16px;
            color: #B4B4B4;
            cursor: text;
          }

          > .textarea{
            padding-top: 10px;
            height: 108px;
            resize: none;
          }
        }
      }

      .required-field {
        .warn_active {
          border: 1px solid #FF8484;
          color: #FF8484;
        }

        &:after {
          content: 'Поле является обязательным';
          position: absolute;
          bottom: 4px;
          left: 0;
          display: none;
          width: 100%;
          font-size: 8px;
          line-height: 10px;
          letter-spacing: -0.02em;
          color: #FF8484;
        }

        > p:before {
          content: '';
          position: absolute;
          top: 0;
          right: -4px;
          display: block;
          width: 4px;
          height: 4px;
          background: #FF8484;
          border-radius: 4px;
        }
      }

      .button {
        width: 100%;
        height: 36px;
        background: #EEEEEE;
        border: none;
        outline: none;
        border-radius: 10px;

        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #B4B4B4;

        transition: transform .1s ease;

        &_active {
          background: #7BAE73;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          color: #FFFFFF;
          cursor: pointer;

          &:active {
            transform: translateY(2px) !important;
          }

          &:hover {
            transform: scale(1.01);
          }

          &:focus {
            border: 1px solid black;
          }
        }
      }
    }

  }
</style>
