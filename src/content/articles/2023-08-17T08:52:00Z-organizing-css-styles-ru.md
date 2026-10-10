---
title: Организовываем CSS стили
brief:
  Любой веб-разработчик рано или поздно сталкивается с CSS. Но речь ниже пойдет
  не про новые свойства или новомодные CSS-приемы, а про организацию стилей в
  вашем приложении. Возможно, термин «организация стилей» может прозвучать
  громче, чем будет на самом деле 😁
slug: organizing-css-styles
publishedAt: 2023-08-17T08:52:00Z
tags:
  - css
  - stylelint
lang: ru
---

Любой веб-разработчик рано или поздно сталкивается с CSS. Но речь ниже пойдет не
про новые свойства или новомодные CSS-приемы (для этого есть прекрасный
[https://css-tricks.com](https://css-tricks.com/)), а про организацию стилей в
вашем приложении. Возможно, термин «организация стилей» может прозвучать громче,
чем будет на самом деле 😁

С незапамятных времен разработчики пытались превратить необъятную массу
селекторов и CSS-файлов в лаконичную структуру. Многие из вас слышали про
методологии организации CSS. Проговаривать и пояснять за каждую здесь не буду, а
приведу ссылки для общего ознакомления
([тыц1](https://css-tricks.com/methods-organize-css/),
[тыц2](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies)).
Как видно из статей, основные методологии - это BEM, OOCSS, SMACSS, Atomic CSS.
Но хоть они и существуют сколько существует CSS, по инфографике от
[https://stateofcss.com](https://stateofcss.com/) о них знает оптимистично не
более 2/3 опрошенных разработчиков
([тыц1](https://2019.stateofcss.com/technologies/methodologies/),
[тыц2](https://2020.stateofcss.com/en-US/technologies/methodologies/)). Забавный
момент, что CSS-методологии исключили из опроса начиная с 2021 года (или еще не
успели добавить результаты?). Но по тренду 2019->2020 видно, что он снисходящий.
Тема становиться менее неактуальной для разработчиков на сегодня, поэтому нет
большого смысла углубляться и разбираться в нюансах каждой их методологий 👹

Но вопрос так и остается открытым - как же организовать свои стили, чтобы
предотвращать дублирование, перекрытие стилей и по максимуму переиспользовать
существующие? Ответ на вопрос можно грубо разделить на две категории:

### Использовать готовые фреймворки ([тыц](https://2022.stateofcss.com/en-US/css-frameworks/) на наиболее популярные за 2022 год)

Они избавляют от необходимости, как ни парадоксально, описывать стили в
принципе, а следовательно нет необходимости их как-либо организовывать.
Фактически, у вас уже есть готовый набор селекторов, которые хорошо
комбинируются между собой и позволяют реализовывать задуманное.

Из минусов такого подхода - слабая гибкость и необходимость костылить решения
задач, выходящие за рамки фреймворка. Подход отлично подходит для
прототипирования, PoC и проектов без дизайнерских изысков

### Автосборочные решения

В настоящий момент наиболее ходовой подход к автосборке и генерации CSS - это
пре-/пост-процессоры ([тыц](https://2022.stateofcss.com/en-US/other-tools/) на
наиболее популярные за 2022 год) и CSS-in-JS
([тыц](https://2022.stateofcss.com/en-US/css-in-js/) на наиболее популярные за
2022 год).

Обе опции - это CSS на максималках со всеми вытекающими, поэтому минус (но минус
ли?) такого подхода - необходимость описания стилей и организация их хранения.
Пришли с чего начинали пост 🙃 Но не все так плохо, ведь всё большее
предпочтение уходит к CSS-in-JS, а его основное преимущество в изолированности
пространства имен селекторов (решается проблема перекрытия стилей) и возможность
использовать стили, как обычный код (решается проблема дублирования с
добавлением переиспользования стилей).

На счет организации стилей в приложении: самая простая и мощная структура -
держать стили максимально близко к месту их использования. Идеально - в рамках
одной папки или в файле с компонентом. Примеры таких организаций стилей:
[тыц1](https://blog.logrocket.com/styling-react-5-ways-style-react-apps/),
[тыц2](https://www.taniarascia.com/react-architecture-directory-structure/),
[тыц3](https://medium.com/@kmathy/angular-tips-and-tricks-for-css-structure-cb73fa50f0e8).
Но проекты у всех разные, поэтому гуглите конкретно под свою ситуацию и/или
читайте рекомендации по стилям к вашим фреймворкам
([пример](https://nextjs.org/docs/app/building-your-application/styling) для
next.js)

#### _Бонус: Stylelint_

Говоря про стили, нельзя не упомянуть [Stylelint](https://stylelint.io/). Как и
основной код, описанные стили требуют проверки на корректность и
упорядоченность. Если с вопросом проверки проблем не возникает, т.к вполне
достаточно использовать
[`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
с уже готовым выстраданным набором правил, то с порядком свойств не всё так
однозначно ведь он тревожит умы не первый десяток лет
([тыц](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)
на пост за 2012 год). Но под самым популярным Grouped by type каждый понимает
своё.

На сегодня существует несколько вариантов порядка стилей с готовой конфигурацией
для Stylelint. Для удобства ссылки на модули приведу в инфографике на
[npmtrends](https://npmtrends.com/stylelint-config-clean-order-vs-stylelint-config-concentric-order-vs-stylelint-config-idiomatic-order-vs-stylelint-config-property-sort-order-smacss-vs-stylelint-config-rational-order-vs-stylelint-config-recess-order).
Расписывать про каждую не буду, но лично мне больше всего импанируют
[`stylelint-config-property-sort-order-smacss`](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss),
[`stylelint-config-recess-order`](https://npmjs.com/package/stylelint-config-recess-order)
и
[`stylelint-config-concentric-order`](https://www.npmjs.com/package/stylelint-config-concentric-order).
Они отличаются незначительными деталями, но их объединяет общая идея - модель
упорядочивания свойства. Первоочередно идут те свойства, которые влияют на то,
как элемент вписан в страницу к свойствах изменяющим внешний вид элемента

Пример готовой конфигурации с использованием `stylelint-config-recess-order`.
Применим для [`styled-components`](https://styled-components.com/) и
[`emotion`](https://emotion.sh/):

```js title="stylelint.config.cjs"
/**
 *
 * @type {import('stylelint').Config}
 */
module.exports = {
  customSyntax: "postcss-styled-syntax",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-csstree-validator"],
  rules: {
    "csstree/validator": {
      syntaxExtensions: ["sass"],
    },
  },
};
```
