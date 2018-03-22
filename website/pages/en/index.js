/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <main className="page-content" aria-label="Content">
          <section className='banner bg-dark-gray-gradient'>
            <div className='pt6 mw8 center ph4 tc'>
              <svg className='w4 fill-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 16">
                <path d="M35.3562857,0.408911325 C35.0941318,0.145351205 34.737862,-0.00189210772 34.3669286,1.83616382e-05 L1.38835714,1.83616382e-05 C0.621588666,1.83616382e-05 9.39020561e-17,0.624278929 0,1.39434337 L0,14.605675 C9.39020561e-17,15.3757394 0.621588666,16 1.38835714,16 L34.3669286,16 C34.737862,16.0019105 35.0941318,15.8546672 35.3562857,15.591107 L41.608963,9.00306702 C42.1397237,8.46059446 42.1397237,7.55581393 41.608963,7.01334137 L35.3562857,0.408911325 Z M24.9537857,4.4078845 C25.1185337,4.25237815 25.338587,4.1698718 25.5645,4.17890444 C25.7072641,4.18098639 25.8472361,4.21894127 25.9716429,4.28930554 C26.1010296,4.36009357 26.2103244,4.46282197 26.2892143,4.58779741 C26.3678208,4.70943738 26.4088967,4.85168734 26.4072857,4.99669037 C26.4096384,5.14179402 26.368501,5.28425687 26.2892143,5.40558333 C26.2096564,5.52894582 26.1004394,5.6301949 25.9716429,5.69998626 C25.7085465,5.84781812 25.387882,5.84781812 25.1247857,5.69998626 C24.9974445,5.63118465 24.8906426,5.52956895 24.8153571,5.40558333 C24.73884,5.28320045 24.6992456,5.14118393 24.7013571,4.99669037 C24.696653,4.77297538 24.788732,4.55819514 24.9537857,4.4078845 Z M8.79428571,11.2036855 C8.57193825,11.6401326 8.2355751,12.0076235 7.82121429,12.2668072 C6.98024764,12.7832877 5.9221095,12.7832877 5.08114286,12.2668072 C4.66828102,12.0070514 4.33337269,11.6396124 4.11214286,11.2036855 C3.86946793,10.7167389 3.74792697,10.1779763 3.75792857,9.63353657 C3.75197057,9.10816898 3.87651096,8.58959657 4.12028571,8.12472153 C4.34704894,7.68551952 4.68560033,7.31447491 5.1015,7.04933304 C5.9288204,6.52613461 6.9816796,6.52613461 7.809,7.04933304 C8.22489967,7.31447491 8.56345106,7.68551952 8.79021429,8.12472153 C9.03398904,8.58959657 9.15852943,9.10816898 9.15257143,9.63353657 C9.16114911,10.1782976 9.03821581,10.7170397 8.79428571,11.2036855 Z M14.6492462,8.62997437 C14.3110714,8.12881046 13.7438411,7.78071032 13.1181429,7.82214074 C12.8472245,7.81967153 12.5823607,7.9026185 12.3608571,8.05929866 C12.1232184,8.22058439 11.9322066,8.44203846 11.8071429,8.70126061 C11.668965,9.01666856 11.6008856,9.35852881 11.6076429,9.70304837 C11.6071,10.0232317 11.6751388,10.3397865 11.8071429,10.6312354 C11.9186557,10.8861635 12.1010153,11.1033801 12.3323571,11.2568416 C12.5616165,11.4049246 12.8293053,11.4817359 13.1018571,11.4776438 C13.3108813,11.4670291 13.4618807,11.4506774 13.5548553,11.4285889 C13.6301664,11.4106968 13.7315956,11.3670775 13.8591429,11.2977309 C14.1297651,11.1597692 14.3662482,10.9627843 14.5512857,10.7211918 L15.3411429,11.6371121 C15.058758,11.9658363 14.7068348,12.2270716 14.3110714,12.4017419 C13.9252832,12.5677304 13.5093236,12.6512799 13.0896429,12.6470777 C12.5758713,12.6553362 12.0694332,12.523944 11.6239286,12.2668072 C11.1925137,12.0129412 10.8400518,11.6433892 10.6060714,11.1995966 C10.3580581,10.7273404 10.2320644,10.2001099 10.2396429,9.666248 C10.2331078,9.13119908 10.3590212,8.60289986 10.6060714,8.12881046 C10.8396224,7.67937637 11.1917477,7.30310459 11.6239286,7.04115518 C12.0730103,6.76809198 12.589126,6.62647059 13.1140714,6.63226222 C13.5667534,6.62929377 14.0144724,6.72704237 14.4250714,6.91848729 C14.8149899,7.09581657 15.1477954,7.37906744 15.3859286,7.73627322 L14.6492462,8.62997437 Z M21.4360714,12.4712537 L16.9575,12.4712537 L16.9575,11.412221 L18.5127857,11.412221 L18.5127857,5.31562688 L17.043,5.31562688 L17.043,4.24023839 L19.893,4.24023839 L19.893,11.412221 L21.4360714,11.412221 L21.4360714,12.4712537 Z M27.5676429,12.4712537 L23.6142857,12.4712537 L23.6142857,11.3754206 L24.9782143,11.3754206 L24.9782143,7.87529683 L23.6712857,7.87529683 L23.6712857,6.77946369 L26.3258571,6.77946369 L26.3258571,11.3754206 L27.5472857,11.3754206 L27.5676429,12.4712537 Z M34.2447857,5.82265415 C34.0577892,5.64058907 33.8468257,5.48512573 33.6177857,5.36060511 C33.4353667,5.27627177 33.236358,5.23434224 33.0355714,5.23793722 C32.7185167,5.21534339 32.4084247,5.33870978 32.1927857,5.57322945 C31.9832136,5.85832602 31.8821216,6.20931781 31.9077857,6.56275042 L31.9077857,6.79581941 L33.6462857,6.79581941 L33.6462857,7.87938576 L31.9159286,7.87938576 L31.9159286,12.4712537 L30.5927143,12.4712537 L30.5927143,7.86303004 L29.3712857,7.86303004 L29.3712857,6.77946369 L30.5927143,6.77946369 L30.5927143,6.54230577 C30.5793303,6.08589805 30.6875593,5.63418163 30.9062143,5.23384829 C31.1051382,4.88577728 31.3989587,4.60204316 31.7530714,4.41606236 C32.1174132,4.22555974 32.5230567,4.12862969 32.9337857,4.13392622 C33.6430246,4.12578136 34.3239617,4.41294506 34.8147857,4.92717856 L34.2447857,5.82265415 Z M7.61357143,8.62357095 C7.72664166,8.94645848 7.78044151,9.28727011 7.77235714,9.62944764 C7.77770764,9.97010022 7.7239772,10.3090885 7.61357143,10.6312354 C7.5254504,10.8957573 7.36622868,11.1306637 7.1535,11.3099977 C6.9541177,11.4708228 6.7048236,11.5562076 6.44914286,11.5512446 C6.19775617,11.5569237 5.95250884,11.4728914 5.757,11.3140866 C5.54506136,11.1398974 5.38456343,10.910841 5.29285714,10.65168 C5.18156795,10.3226963 5.12784568,9.9768425 5.13407143,9.62944764 C5.12687646,9.28832447 5.18207643,8.94877133 5.29692857,8.62765988 C5.38589675,8.37264097 5.54378936,8.14752634 5.75292857,7.97752007 C5.95526964,7.82866485 6.20278373,7.75495857 6.45321429,7.76898466 C6.70639775,7.76299719 6.95431252,7.84215282 7.15757143,7.99387579 C7.3650652,8.15696282 7.52301295,8.37507451 7.61357143,8.62357095 Z M57,15.3335045 C57,15.7015998 56.702877,16 56.3363571,16 L45.2457857,16 C44.8792659,16 44.5821429,15.7015998 44.5821429,15.3335045 L44.5821429,14.6833412 C44.5821429,14.3152459 44.8792659,14.0168457 45.2457857,14.0168457 L56.3404286,14.0168457 C56.7053574,14.0190942 57.0000069,14.3168368 57,14.6833412 L57,15.3335045 Z"/>
              </svg>
              <h1 className='code green fw5 mb3'>The Open CLI Framework</h1>
              <h2 className='white 0-70 normal mt0'>Create command line tools your users love</h2>

              <div className='relative mt4 tl mw6 bt bl br b--white-30 center br2 br--top code-example'>
                <svg className='flex pa2 o-50' fill='none' stroke='#fff' viewBox='0 0 40 10' width='40' height='10'>
                  <circle cx="5" cy="5" r="5"></circle>
                  <circle cx="20" cy="5" r="5"></circle>
                  <circle cx="35" cy="5" r="5"></circle>
                </svg>
                <div className='white pa4 pb5 pt3 tc'>
                  <code className='lh-copy f6 dib tl'>
                    <span className='db'><span className='white-60'>$</span> npx oclif single mynewcli</span>
                    <span className='db pt1'><span className='white-60'>? npm package name (mynewcli):</span> mynewcli</span>
                    <span className='db pt1'><span className='white-60'>$</span> cd mynewcli</span>
                    <span className='db pt1'><span className='white-60'>$</span> ./bin/run</span>
                    <span className='db mt1 bg-green dark-gray pa2 lh-solid br2'>hello world from ./src/index.js!</span>
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-light-gray-gradient pv6'>
            <div className='center mw6 ph4 tc'>
              <h2 className='mt0 fw4 mid-gray'>Build simple to advanced CLIs in minutes</h2>
              <p className='dark-gray f6 lh-large'>oclif is an open source framework for building a command line interface (CLI) in Node.js. Create CLIs with a few flags or advanced CLIs that have subcommands. oclif makes it easy for you to build CLIs for your company, service, or your own&nbsp;development&nbsp;needs.</p>
              <div className='mt3'>
                <a href={docUrl('introduction.html', language)} className='lh-solid dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray'>
                  <svg className='v-btm pr1 fill-mid-gray' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M31,11 C34.8663333,11 38,14.1340556 38,18 C38,21.8659444 34.8659444,25 31,25 C27.1344444,25 24,21.8659444 24,18 C24,14.1340556 27.1344444,11 31,11 Z M29.7,19.1100505 L28.5454295,17.95548 C28.269036,17.6790865 27.8252729,17.6747271 27.55,17.95 C27.276633,18.223367 27.2763233,18.6662728 27.55548,18.9454295 L29.1501549,20.5401044 C29.2974579,20.6874074 29.4922992,20.7574439 29.6838384,20.7490639 C29.8833986,20.7682041 30.0887891,20.7011604 30.2411984,20.5487511 L33.8531667,16.9367828 C34.1233202,16.6666293 34.123367,16.223367 33.85,15.95 C33.5747271,15.6747271 33.1348353,15.6752152 32.8632172,15.9468333 L29.7,19.1100505 Z" transform="translate(-24 -11)"/>
                  </svg>
                  Getting Started
                </a>
                <a href='https://github.com/oclif/oclif' className='lh-solid dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray'>
                  <svg className="v-btm pr1 fill-mid-gray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M0,7.94661352 C0,11.4569776 2.29202861,14.4356162 5.47100893,15.4863838 C5.87126677,15.5595571 6.0171276,15.3141828 6.0171276,15.1034439 C6.0171276,14.9146569 6.010252,14.4151277 6.00632309,13.7521781 C3.78108598,14.2321946 3.31158108,12.6867758 3.31158108,12.6867758 C2.94766567,11.7686956 2.42315602,11.524297 2.42315602,11.524297 C1.69679855,11.0311094 2.47816078,11.0413536 2.47816078,11.0413536 C3.28113202,11.0974531 3.70348998,11.860406 3.70348998,11.860406 C4.4175696,13.074594 5.57610731,12.7238502 6.03186101,12.5204286 C6.10454587,12.0067525 6.31130483,11.6569844 6.5396728,11.4579532 C4.76331379,11.2574586 2.8956076,10.5759718 2.8956076,7.53098953 C2.8956076,6.66315494 3.20746493,5.95386237 3.71920562,5.39823359 C3.6371896,5.1972511 3.36265693,4.38941857 3.79778385,3.29572259 C3.79778385,3.29572259 4.46962767,3.08156891 5.99748304,4.1098968 C6.63593112,3.93379321 7.32005279,3.84549751 8.00024556,3.84257058 C8.67994721,3.84549751 9.36406888,3.93379321 10.0034992,4.1098968 C11.5303723,3.08156891 12.2012339,3.29572259 12.2012339,3.29572259 C12.6373431,4.38941857 12.3628104,5.1972511 12.2807944,5.39823359 C12.7935173,5.95386237 13.1029191,6.66315494 13.1029191,7.53098953 C13.1029191,10.5832892 11.2327573,11.2550195 9.45050493,11.4520994 C9.73780656,11.6974736 9.99318579,12.1823683 9.99318579,12.9233693 C9.99318579,13.9858447 9.98385463,14.8429472 9.98385463,15.1034439 C9.98385463,15.3161341 10.127751,15.5629718 10.5339022,15.4854082 C13.7099358,14.4326892 16,11.4564898 16,7.94661352 C16,3.60365593 12.4924674,0.0746232151 8.13783517,0.00116792798 C8.09173843,0.000390353833 8.04554676,0 7.99926333,0 C3.58218484,0 0,3.55768277 0,7.94661352 Z"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className='center ph4 tc mw7 pb6'>
              <h2 className='mt0 fw4 mid-gray'>See it in action</h2>
              <p className='mb0 dark-gray f6 lh-large mw6 center'>Experience going from zero to CLI with oclif.</p>
              <div className='aspect-ratio mt4 z-0' style={{paddingBottom: '60.85%'}}>
                <iframe className='aspect-ratio--object shadow-5 video-player' src="https://player.vimeo.com/video/260856112" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>
          </section>

          <section className='bg-light-gray-gradient-reversed pb6'>
            <div className="mw8 center ph4 f6">
              <div className="cf">
                <div className="fl w-100 w-25-l pb4 pb0-l pr4-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">⚡</span>Ready to go</h2>
                    <p className="lh-large dark-gray mb0">Scaffold a fully functional CLI to get started quickly. oclif packages our years of experience into out-of-the-box functionality for argument parsing, command testing, and auto-documentation of CLI&nbsp;features.</p>
                  </div>
                </div>
                <div className="fl w-100 w-25-l pb4 pb0-l pr4-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">👐</span>Open source</h2>
                    <p className="lh-large dark-gray mb0">oclif is <a href='https://github.com/oclif/oclif/blob/master/LICENSE'>open source</a> and free to use or modify. We think you’ll love it too and you can also help make it&nbsp;better.</p>
                  </div>
                </div>
                <div className="fl w-100 w-25-l pb4 pb0-l pr4-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">✅</span>Easy to extend</h2>
                    <p className="lh-large dark-gray mb0">You or your users can easily extend your CLI functionality to meet custom needs using plugins. Plugins are modular and shareable, encouraging&nbsp;reuse.</p>
                  </div>
                </div>
                <div className="fl w-100 w-25-l pb0-l tc tl-l">
                  <div className='mw6 center'>
                    <h2 className='mt0 fw4 mid-gray flex-l'><span className="lh-title-l lh-solid v-mid pr2">🔒</span>Trusted</h2>
                    <p className="lh-large dark-gray mb0">oclif is actively used to build the <a href='https://github.com/heroku/cli' className='dim mid-gray'>Heroku</a> and <a href='https://developer.salesforce.com/tools/sfdxcli' className='dim mid-gray'>Salesforce CLIs</a>, powering millions of interactions for developers&nbsp;every&nbsp;day.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='pv6'>
            <div className='center ph4 tc mw7'>
              <h2 className='mt0 fw4 mid-gray'>CLIs built using <svg className='dib w3 ml1 fill-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 16">
                <path d="M35.3562857,0.408911325 C35.0941318,0.145351205 34.737862,-0.00189210772 34.3669286,1.83616382e-05 L1.38835714,1.83616382e-05 C0.621588666,1.83616382e-05 9.39020561e-17,0.624278929 0,1.39434337 L0,14.605675 C9.39020561e-17,15.3757394 0.621588666,16 1.38835714,16 L34.3669286,16 C34.737862,16.0019105 35.0941318,15.8546672 35.3562857,15.591107 L41.608963,9.00306702 C42.1397237,8.46059446 42.1397237,7.55581393 41.608963,7.01334137 L35.3562857,0.408911325 Z M24.9537857,4.4078845 C25.1185337,4.25237815 25.338587,4.1698718 25.5645,4.17890444 C25.7072641,4.18098639 25.8472361,4.21894127 25.9716429,4.28930554 C26.1010296,4.36009357 26.2103244,4.46282197 26.2892143,4.58779741 C26.3678208,4.70943738 26.4088967,4.85168734 26.4072857,4.99669037 C26.4096384,5.14179402 26.368501,5.28425687 26.2892143,5.40558333 C26.2096564,5.52894582 26.1004394,5.6301949 25.9716429,5.69998626 C25.7085465,5.84781812 25.387882,5.84781812 25.1247857,5.69998626 C24.9974445,5.63118465 24.8906426,5.52956895 24.8153571,5.40558333 C24.73884,5.28320045 24.6992456,5.14118393 24.7013571,4.99669037 C24.696653,4.77297538 24.788732,4.55819514 24.9537857,4.4078845 Z M8.79428571,11.2036855 C8.57193825,11.6401326 8.2355751,12.0076235 7.82121429,12.2668072 C6.98024764,12.7832877 5.9221095,12.7832877 5.08114286,12.2668072 C4.66828102,12.0070514 4.33337269,11.6396124 4.11214286,11.2036855 C3.86946793,10.7167389 3.74792697,10.1779763 3.75792857,9.63353657 C3.75197057,9.10816898 3.87651096,8.58959657 4.12028571,8.12472153 C4.34704894,7.68551952 4.68560033,7.31447491 5.1015,7.04933304 C5.9288204,6.52613461 6.9816796,6.52613461 7.809,7.04933304 C8.22489967,7.31447491 8.56345106,7.68551952 8.79021429,8.12472153 C9.03398904,8.58959657 9.15852943,9.10816898 9.15257143,9.63353657 C9.16114911,10.1782976 9.03821581,10.7170397 8.79428571,11.2036855 Z M14.6492462,8.62997437 C14.3110714,8.12881046 13.7438411,7.78071032 13.1181429,7.82214074 C12.8472245,7.81967153 12.5823607,7.9026185 12.3608571,8.05929866 C12.1232184,8.22058439 11.9322066,8.44203846 11.8071429,8.70126061 C11.668965,9.01666856 11.6008856,9.35852881 11.6076429,9.70304837 C11.6071,10.0232317 11.6751388,10.3397865 11.8071429,10.6312354 C11.9186557,10.8861635 12.1010153,11.1033801 12.3323571,11.2568416 C12.5616165,11.4049246 12.8293053,11.4817359 13.1018571,11.4776438 C13.3108813,11.4670291 13.4618807,11.4506774 13.5548553,11.4285889 C13.6301664,11.4106968 13.7315956,11.3670775 13.8591429,11.2977309 C14.1297651,11.1597692 14.3662482,10.9627843 14.5512857,10.7211918 L15.3411429,11.6371121 C15.058758,11.9658363 14.7068348,12.2270716 14.3110714,12.4017419 C13.9252832,12.5677304 13.5093236,12.6512799 13.0896429,12.6470777 C12.5758713,12.6553362 12.0694332,12.523944 11.6239286,12.2668072 C11.1925137,12.0129412 10.8400518,11.6433892 10.6060714,11.1995966 C10.3580581,10.7273404 10.2320644,10.2001099 10.2396429,9.666248 C10.2331078,9.13119908 10.3590212,8.60289986 10.6060714,8.12881046 C10.8396224,7.67937637 11.1917477,7.30310459 11.6239286,7.04115518 C12.0730103,6.76809198 12.589126,6.62647059 13.1140714,6.63226222 C13.5667534,6.62929377 14.0144724,6.72704237 14.4250714,6.91848729 C14.8149899,7.09581657 15.1477954,7.37906744 15.3859286,7.73627322 L14.6492462,8.62997437 Z M21.4360714,12.4712537 L16.9575,12.4712537 L16.9575,11.412221 L18.5127857,11.412221 L18.5127857,5.31562688 L17.043,5.31562688 L17.043,4.24023839 L19.893,4.24023839 L19.893,11.412221 L21.4360714,11.412221 L21.4360714,12.4712537 Z M27.5676429,12.4712537 L23.6142857,12.4712537 L23.6142857,11.3754206 L24.9782143,11.3754206 L24.9782143,7.87529683 L23.6712857,7.87529683 L23.6712857,6.77946369 L26.3258571,6.77946369 L26.3258571,11.3754206 L27.5472857,11.3754206 L27.5676429,12.4712537 Z M34.2447857,5.82265415 C34.0577892,5.64058907 33.8468257,5.48512573 33.6177857,5.36060511 C33.4353667,5.27627177 33.236358,5.23434224 33.0355714,5.23793722 C32.7185167,5.21534339 32.4084247,5.33870978 32.1927857,5.57322945 C31.9832136,5.85832602 31.8821216,6.20931781 31.9077857,6.56275042 L31.9077857,6.79581941 L33.6462857,6.79581941 L33.6462857,7.87938576 L31.9159286,7.87938576 L31.9159286,12.4712537 L30.5927143,12.4712537 L30.5927143,7.86303004 L29.3712857,7.86303004 L29.3712857,6.77946369 L30.5927143,6.77946369 L30.5927143,6.54230577 C30.5793303,6.08589805 30.6875593,5.63418163 30.9062143,5.23384829 C31.1051382,4.88577728 31.3989587,4.60204316 31.7530714,4.41606236 C32.1174132,4.22555974 32.5230567,4.12862969 32.9337857,4.13392622 C33.6430246,4.12578136 34.3239617,4.41294506 34.8147857,4.92717856 L34.2447857,5.82265415 Z M7.61357143,8.62357095 C7.72664166,8.94645848 7.78044151,9.28727011 7.77235714,9.62944764 C7.77770764,9.97010022 7.7239772,10.3090885 7.61357143,10.6312354 C7.5254504,10.8957573 7.36622868,11.1306637 7.1535,11.3099977 C6.9541177,11.4708228 6.7048236,11.5562076 6.44914286,11.5512446 C6.19775617,11.5569237 5.95250884,11.4728914 5.757,11.3140866 C5.54506136,11.1398974 5.38456343,10.910841 5.29285714,10.65168 C5.18156795,10.3226963 5.12784568,9.9768425 5.13407143,9.62944764 C5.12687646,9.28832447 5.18207643,8.94877133 5.29692857,8.62765988 C5.38589675,8.37264097 5.54378936,8.14752634 5.75292857,7.97752007 C5.95526964,7.82866485 6.20278373,7.75495857 6.45321429,7.76898466 C6.70639775,7.76299719 6.95431252,7.84215282 7.15757143,7.99387579 C7.3650652,8.15696282 7.52301295,8.37507451 7.61357143,8.62357095 Z M57,15.3335045 C57,15.7015998 56.702877,16 56.3363571,16 L45.2457857,16 C44.8792659,16 44.5821429,15.7015998 44.5821429,15.3335045 L44.5821429,14.6833412 C44.5821429,14.3152459 44.8792659,14.0168457 45.2457857,14.0168457 L56.3404286,14.0168457 C56.7053574,14.0190942 57.0000069,14.3168368 57,14.6833412 L57,15.3335045 Z"/>
              </svg></h2>
              <p className='mb0 dark-gray f6 lh-large mw6 center'>With oclif you can build command line tools for your business, open source project, or your own development workflow. Check out what others have built.</p>
              <div className='mt3'>
                <a href='https://github.com/heroku/cli' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className='fill-mid-gray v-btm pr1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M1,2.28390792 C1,1.02254041 2.00684547,0 3.24157722,0 L12.7584228,0 C13.9964117,0 15,1.02521157 15,2.28390792 L15,13.7160921 C15,14.9774596 13.9931545,16 12.7584228,16 L3.24157722,16 C2.00358831,16 1,14.9747884 1,13.7160921 L1,2.28390792 Z M12,13.7142857 L12,8.81632653 C12,7.736 11.4214356,6.94243185 10.7622454,6.63945578 C9.96744598,6.27415126 8.46922978,5.82312925 5.84167985,6.91156463 L5.84167985,2.28571429 L4,2.28571429 L4,9.36054422 L5.16779997,8.81632653 C6.71943989,8.14285714 10.1297524,7.18367347 10.1297524,8.81632653 L10.1297524,13.7142857 L12,13.7142857 Z M10.2011719,5.15230655 C11.2435998,3.79176233 11.8549361,2.75029036 12,2.28571429 L10.2266667,2.28571429 C9.8113896,2.94939439 9.60752804,3.79176233 8.57567708,5.15230655 L10.2011719,5.15230655 Z M4,13.7142857 L6.09,11.7090641 L4,9.70384247 L4,13.7142857 Z"/>
                  </svg>
                  Heroku CLI
                </a>
                <a href='https://developer.salesforce.com/tools/sfdxcli' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className="fill-mid-gray v-btm pr1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.79497857,10.9931044 C8.41078241,11.8797381 7.52782617,12.5 6.5,12.5 C5.44000655,12.5 4.53409275,11.8403066 4.17042594,10.9090871 C3.95706772,10.968335 3.73223173,11 3.5,11 C2.11928813,11 1,9.88071187 1,8.5 C1,7.61137949 1.4636267,6.8310448 2.16218417,6.38769186 C2.05738058,6.11183491 2,5.81261843 2,5.5 C2,4.11928813 3.11928813,3 4.5,3 C5.43852258,3 6.25625588,3.51716036 6.68377135,4.28205251 C7.13946702,3.80045375 7.78464614,3.5 8.5,3.5 C9.5003117,3.5 10.3634059,4.08749811 10.7630588,4.93627064 C11.1917705,4.66018468 11.7021787,4.5 12.25,4.5 C13.7687831,4.5 15,5.73121694 15,7.25 C15,8.76878306 13.7687831,10 12.25,10 C11.9384222,10 11.638947,9.94818254 11.3597219,9.85269511 C10.8104528,10.5513111 9.95762487,11 9,11 C8.93109222,11 8.86272706,10.9976768 8.79497857,10.9931044 L8.79497857,10.9931044 Z"/>
                  </svg>
                  Salesforce CLI
                </a>
                <a href='https://github.com/oclif/kaomoji' className='dim db dib-ns pv3 mt1 ph4 ba b--light-gray br2 link mid-gray lh-solid'>
                  <svg className="fill-mid-gray v-btm pr1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M1,4.0085302 C1,2.8992496 1.89706013,2 3.00585866,2 L12.9941413,2 C14.1019465,2 15,2.90195036 15,4.0085302 L15,11.9914698 C15,13.1007504 14.1029399,14 12.9941413,14 L3.00585866,14 C1.89805351,14 1,13.0980496 1,11.9914698 L1,4.0085302 Z M2,5.99703014 L2,12.0029699 C2,12.5469637 2.44882258,13 3.00247329,13 L12.9975267,13 C13.544239,13 14,12.5536144 14,12.0029699 L14,5.99703014 C14,5.45303631 13.5511774,5 12.9975267,5 L3.00247329,5 C2.45576096,5 2,5.4463856 2,5.99703014 Z M4,7.19999695 L6.5,9.5 L4,11.8000031 L3.19999695,11 L5,9.5 L3.19999695,8 L4,7.19999695 Z M7,11 L10,11 L10,12 L7,12 L7,11 Z"/>
                  </svg>
                  Kaomoji CLI
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

module.exports = Index;
