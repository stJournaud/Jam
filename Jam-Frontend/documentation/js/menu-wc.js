'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">jam-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-fd95d8a23bbbf771dd34a7b338566fc7377cc7a710f3aeb725fde7475b00fa805f22f9679d7ce8875f295d24a227f246f5467186d5bb74efcfdc01cd2f9d9d22"' : 'data-bs-target="#xs-components-links-module-AdminModule-fd95d8a23bbbf771dd34a7b338566fc7377cc7a710f3aeb725fde7475b00fa805f22f9679d7ce8875f295d24a227f246f5467186d5bb74efcfdc01cd2f9d9d22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-fd95d8a23bbbf771dd34a7b338566fc7377cc7a710f3aeb725fde7475b00fa805f22f9679d7ce8875f295d24a227f246f5467186d5bb74efcfdc01cd2f9d9d22"' :
                                            'id="xs-components-links-module-AdminModule-fd95d8a23bbbf771dd34a7b338566fc7377cc7a710f3aeb725fde7475b00fa805f22f9679d7ce8875f295d24a227f246f5467186d5bb74efcfdc01cd2f9d9d22"' }>
                                            <li class="link">
                                                <a href="components/AHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ALayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ALayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7512d867c2e1dc0b2cb7840201ea95626774a1949c337c5cb112e4cbb4627df9c86276d7e8c4a080955d44ed277c0a302fa456c95900b2d3caedaee0999fe159"' : 'data-bs-target="#xs-components-links-module-AppModule-7512d867c2e1dc0b2cb7840201ea95626774a1949c337c5cb112e4cbb4627df9c86276d7e8c4a080955d44ed277c0a302fa456c95900b2d3caedaee0999fe159"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7512d867c2e1dc0b2cb7840201ea95626774a1949c337c5cb112e4cbb4627df9c86276d7e8c4a080955d44ed277c0a302fa456c95900b2d3caedaee0999fe159"' :
                                            'id="xs-components-links-module-AppModule-7512d867c2e1dc0b2cb7840201ea95626774a1949c337c5cb112e4cbb4627df9c86276d7e8c4a080955d44ed277c0a302fa456c95900b2d3caedaee0999fe159"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-81f5b1e9c47fd7b53bc1a37fb4506ca9bef6f8066041b9ad396b96e91eba959a973d6ad9fdd8f7e82d9e2641e372e8ced176189a655065eacb9d35283adcdb6f"' : 'data-bs-target="#xs-components-links-module-AuthModule-81f5b1e9c47fd7b53bc1a37fb4506ca9bef6f8066041b9ad396b96e91eba959a973d6ad9fdd8f7e82d9e2641e372e8ced176189a655065eacb9d35283adcdb6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-81f5b1e9c47fd7b53bc1a37fb4506ca9bef6f8066041b9ad396b96e91eba959a973d6ad9fdd8f7e82d9e2641e372e8ced176189a655065eacb9d35283adcdb6f"' :
                                            'id="xs-components-links-module-AuthModule-81f5b1e9c47fd7b53bc1a37fb4506ca9bef6f8066041b9ad396b96e91eba959a973d6ad9fdd8f7e82d9e2641e372e8ced176189a655065eacb9d35283adcdb6f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-be2131b16bd1d9cb89eec5e0389c8ba687481ee92ae4a20d73bebc74964fcf0d892973ae6a643179aa4ba4770e8c0e96e646f908b2afe8bcf37768a3f3b9412d"' : 'data-bs-target="#xs-components-links-module-ProductModule-be2131b16bd1d9cb89eec5e0389c8ba687481ee92ae4a20d73bebc74964fcf0d892973ae6a643179aa4ba4770e8c0e96e646f908b2afe8bcf37768a3f3b9412d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-be2131b16bd1d9cb89eec5e0389c8ba687481ee92ae4a20d73bebc74964fcf0d892973ae6a643179aa4ba4770e8c0e96e646f908b2afe8bcf37768a3f3b9412d"' :
                                            'id="xs-components-links-module-ProductModule-be2131b16bd1d9cb89eec5e0389c8ba687481ee92ae4a20d73bebc74964fcf0d892973ae6a643179aa4ba4770e8c0e96e646f908b2afe8bcf37768a3f3b9412d"' }>
                                            <li class="link">
                                                <a href="components/ProductAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-2fd527af1fb495e8a5e6b6fc4b711bdf29028dc43cdf00216615c7204b7fa1123f2f5e61401e88e4177344b892755608ff2c5b21abc4280037665d01dd707fa3"' : 'data-bs-target="#xs-components-links-module-PublicModule-2fd527af1fb495e8a5e6b6fc4b711bdf29028dc43cdf00216615c7204b7fa1123f2f5e61401e88e4177344b892755608ff2c5b21abc4280037665d01dd707fa3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-2fd527af1fb495e8a5e6b6fc4b711bdf29028dc43cdf00216615c7204b7fa1123f2f5e61401e88e4177344b892755608ff2c5b21abc4280037665d01dd707fa3"' :
                                            'id="xs-components-links-module-PublicModule-2fd527af1fb495e8a5e6b6fc4b711bdf29028dc43cdf00216615c7204b7fa1123f2f5e61401e88e4177344b892755608ff2c5b21abc4280037665d01dd707fa3"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-6e7b50d2941f34ab7182494eda6e1222d845f165fdb7b34400fd8f05ede4fb124ac6f6217b2d48ce73c8d52888c8a0f6810c656fcc13ec70f61cc2573b3ded25"' : 'data-bs-target="#xs-components-links-module-UserModule-6e7b50d2941f34ab7182494eda6e1222d845f165fdb7b34400fd8f05ede4fb124ac6f6217b2d48ce73c8d52888c8a0f6810c656fcc13ec70f61cc2573b3ded25"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-6e7b50d2941f34ab7182494eda6e1222d845f165fdb7b34400fd8f05ede4fb124ac6f6217b2d48ce73c8d52888c8a0f6810c656fcc13ec70f61cc2573b3ded25"' :
                                            'id="xs-components-links-module-UserModule-6e7b50d2941f34ab7182494eda6e1222d845f165fdb7b34400fd8f05ede4fb124ac6f6217b2d48ce73c8d52888c8a0f6810c656fcc13ec70f61cc2573b3ded25"' }>
                                            <li class="link">
                                                <a href="components/UserAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineOrder.html" data-type="entity-link" >LineOrder</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICredential.html" data-type="entity-link" >ICredential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});