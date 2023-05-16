"use strict";(self.webpackChunkatomic_reaction=self.webpackChunkatomic_reaction||[]).push([[478],{"./stories/Card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),yds_custom_card=__webpack_require__("./node_modules/@yalesites-org/component-library-twig/components/02-molecules/cards/custom-card/yds-custom-card.twig"),yds_custom_card_default=__webpack_require__.n(yds_custom_card),custom_card=(__webpack_require__("./node_modules/@yalesites-org/component-library-twig/components/02-molecules/cards/custom-card/_yds-custom-card.scss"),__webpack_require__("./node_modules/@yalesites-org/component-library-twig/components/02-molecules/cards/custom-card/custom-card.yml")),custom_card_default=__webpack_require__.n(custom_card),image_image=__webpack_require__("./node_modules/@yalesites-org/component-library-twig/components/01-atoms/images/image/image.yml"),image_default=__webpack_require__.n(image_image),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=({heading,snippet,withImage,featured,url})=>{const showImage=withImage?"true":"false";return(0,jsx_runtime.jsx)("div",{className:"custom-card-collection","data-component-width":"site","data-collection-featured":"${featured}",children:(0,jsx_runtime.jsx)("div",{className:"custom-card-collection__inner",children:(0,jsx_runtime.jsx)("ul",{className:"custom-card-collection__cards",children:(0,jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:yds_custom_card_default()({...image_default().responsive_images["3x2"],custom_card__heading:heading,custom_card__snippet:snippet,custom_card__image:showImage,custom_card__featured:featured,custom_card__url:url})}})})})})};Card.displayName="Card",Card.propTypes={heading:prop_types_default().string,snippet:prop_types_default().string,withImage:prop_types_default().bool,featured:prop_types_default().bool,url:prop_types_default().string},Card.defaultProps={heading:custom_card_default().custom_card__heading,snippet:custom_card_default().custom_card__snippet,withImage:!0,featured:!0,url:custom_card_default().custom_card__url},Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{heading:{defaultValue:{value:"customCardData.custom_card__heading",computed:!0},description:"",type:{name:"string"},required:!1},snippet:{defaultValue:{value:"customCardData.custom_card__snippet",computed:!0},description:"",type:{name:"string"},required:!1},withImage:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},featured:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},url:{defaultValue:{value:"customCardData.custom_card__url",computed:!0},description:"",type:{name:"string"},required:!1}}};const Card_stories={title:"Components/Card",component:Card,args:Card.defaultProps},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);