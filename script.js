
const chapters = [
  {
    title: "HORDHAC JAVASCRIPT",
    subtitle: "HORDHAC KU SAABSAN JAVASCRIPT",
    readTime: "~4 min",
    content: `
      <div class="chapter-hero">
        <div class="chapter-number">Hordhaca javascript</div>
        <h1 class="chapter-heading">Bilowgii ama Aasaaskii <em>javaScript</em> </h1>
        <p class="chapter-lead">Laga  bilaabo 10 maalmood oo ku jirtay sanadkii 1995 ilaa ay  ka noqotay barnaamijka ugu caansan uguna isticmaalka badan caalamka  .</p>
      </div>
      <div class="chapter-body">
        <p>Nin lagu magacaabo <strong>Brendan Eich</strong> Ayaa aasaasay luuqada javaScript sanadkii 1995 mudo 10 maalmood gudahood ah .</p>
        <h2> Luuqad ku dhalatay kadis </h2>
        <p> Dhamaadkii sagaashameeyadii dagaal browser-du wuxuu ahaa mid aad u adag. shirkadaha <strong>Netscape Navigator</strong> Iyo  <strong>Microsoft Internet Explorer</strong> ayuu ka dhaxeeyey dagaal iyo xifaaltan adag <strong>javaScript </strong> waxay noqotay hubka ay ku dagaal galayeen <strong>Netscape </strong> </p>
        <blockquote><p>"Java is to JavaScript what car is to carpet." — Chris Heilmann</p></blockquote>
        <p>Magaca javaScript waa magac ku tala-gal iyo kas ay ugu bixiyeen si ay ugu noqoto suuq gayn, maadaama wakhtigaas ay caan ahayd luuqad java, afarta xaraf ee hore mooyee ma jirto wax ay ka siman yihiin (waa laba luuqad oo kala madax banaan java iyo javaScript).</p>
        <h2>Meelaha aad u adeegsan karto </h2>
        <p>Javascipt waa luuqad aad u awood badan waxaad u adeegsan karto meela badan oo kala duwan sida     frontend, backend , web , mobile app </p>
        <div class="callout">
          <div class="callout-icon">💡</div>
          <div class="callout-body"><strong>Xog :</strong> webs caalamka 95% waxay isticmaalaan javaScript, taas oo kuu muujinaysa heer ka ay gaadhsiin tahy saamaynteeduu  </div>
        </div>
        <h3>Marxaladihii ay soomartay javascript</h3>
        <div class="keyword-grid">
          <div class="keyword-card"><div class="kc-name">1995</div><div class="kc-desc">Brendan Eich Ayaa qoray version ugu horeeyey  10 cisho gudahood</div></div>
          <div class="keyword-card"><div class="kc-name">1997</div><div class="kc-desc">ECMAScript 1 standard published</div></div>
          <div class="keyword-card"><div class="kc-name">2009</div><div class="kc-desc">Node.js brings JS to the server</div></div>
          <div class="keyword-card"><div class="kc-name">2015</div><div class="kc-desc">ES6 / ES2015 ayaa si weyn u horumariyay una beddelay luuqadda.</div></div>
          <div class="keyword-card"><div class="kc-name">2023</div><div class="kc-desc">97% websites ka caalamku waxay adeegsaden JavaScript</div></div>
          <div class="keyword-card"><div class="kc-name">Today</div><div class="kc-desc">Maanta waa luuqada ugu caansan caalamka</div></div>
        </div>
        <p>Isbeddelkii JavaScript — laga bilaabo barnaamij yar oo degdeg loo sameeyay ilaa uu noqday nidaam dhaqaale oo qiimihiisu gaarayo trillion-dollar — waa mid ka mid ah sheekooyinka ugu yaabka badan taariikhda kumbuyuutarrada. Wax walbana waxay ka bilaabmaan fahamka sababta JavaScript u shaqeeyo sida uu u shaqeeyo</p>
      </div>`
  },
{
  title: "JavaScript Basics",
  subtitle: "The foundation of programming",
  readTime: "~5 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 01</div>
      <h1 class="chapter-heading">JavaScript <em>Basics</em></h1>
      <p class="chapter-lead">JavaScript waa luuqadda ka dhigta websites-ka kuwo nool oo interactive ah. Waxay kuu ogolaanaysaa inaad samayso logic, animations, interactions, iyo applications casri ah.</p>
    </div>

    <div class="chapter-body">

      <h2>What is JavaScript?</h2>
      <p>JavaScript waa programming language loo isticmaalo websites-ka. Waxaa lagu daraa HTML & CSS si webpage-ku u yeesho dhaqdhaqaaq iyo functionality.</p>

<pre><code><span class="cm">// Example JavaScript</span>
<span class="kw">console</span>.log(<span class="str">"Hello JavaScript"</span>);
</code><div class="code-label">JavaScript</div></pre>

      <h2>Variables</h2>
      <p>Variables waa meel lagu kaydiyo xogta program-ka. Waxay qabtaan values kala duwan sida magacyo, numbers, ama text.</p>

<pre><code><span class="kw">let</span> name = <span class="str">"Abdirizak"</span>;
<span class="kw">const</span> age = <span class="num">20</span>;

<span class="kw">console</span>.log(name);
<span class="kw">console</span>.log(age);
</code><div class="code-label">Variables</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Use <code>const</code> haddii value-ku is badalaynin. Isticmaal <code>let</code> haddii aad rabto inaad mar dambe badasho value-ga.
        </div>
      </div>

      <h2>Data Types</h2>
      <p>JavaScript wuxuu leeyahay noocyo kala duwan oo data ah.</p>

<pre><code><span class="kw">let</span> username = <span class="str">"Ali"</span>;      <span class="cm">// String</span>
<span class="kw">let</span> age = <span class="num">22</span>;               <span class="cm">// Number</span>
<span class="kw">let</span> isOnline = <span class="kw">true</span>;       <span class="cm">// Boolean</span>
<span class="kw">let</span> score = <span class="kw">null</span>;          <span class="cm">// Null</span>
<span class="kw">let</span> data;                  <span class="cm">// Undefined</span>
</code><div class="code-label">Data Types</div></pre>

      <h2>Strings</h2>
      <p>Strings waa qoraal ama text lagu qoro quotes gudaha.</p>

<pre><code><span class="kw">let</span> message = <span class="str">"Welcome to JavaScript"</span>;

<span class="kw">console</span>.log(message);
</code><div class="code-label">Strings</div></pre>

      <h2>Numbers</h2>
      <p>Numbers waxaa loo isticmaalaa xisaab iyo calculations.</p>

<pre><code><span class="kw">let</span> a = <span class="num">10</span>;
<span class="kw">let</span> b = <span class="num">5</span>;

<span class="kw">console</span>.log(a + b);
<span class="kw">console</span>.log(a * b);
</code><div class="code-label">Numbers</div></pre>

      <h2>Booleans</h2>
      <p>Boolean wuxuu leeyahay laba value oo keliya: <strong>true</strong> ama <strong>false</strong>.</p>

<pre><code><span class="kw">let</span> isLoggedIn = <span class="kw">true</span>;

<span class="kw">console</span>.log(isLoggedIn);
</code><div class="code-label">Boolean</div></pre>

      <h2>Comments</h2>
      <p>Comments waxaa loo isticmaalaa sharaxaad code-ka dhexdiisa. Browser-ku ma akhriyo.</p>

<pre><code><span class="cm">// Single line comment</span>

<span class="cm">/*
 Multi line
 comment
*/</span>
</code><div class="code-label">Comments</div></pre>

      <h2>Console</h2>
      <p><strong>console.log()</strong> waxaa loo isticmaalaa in xog lagu daabaco browser console-ka.</p>

<pre><code><span class="kw">console</span>.log(<span class="str">"Learning JavaScript"</span>);
</code><div class="code-label">Console</div></pre>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Operators</code> iyo sida JavaScript u sameeyo calculations & comparisons.
        </div>
      </div>

    </div>
  `
},
{
  title: "Operators & Expressions",
  subtitle: "Making JavaScript do work",
  readTime: "~6 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 02</div>
      <h1 class="chapter-heading">Operators <em>&</em> Expressions</h1>
      <p class="chapter-lead">Operators waa calaamado JavaScript u sheegaya inuu sameeyo hawlo sida xisaab, isbarbardhig, iyo logic decisions.</p>
    </div>

    <div class="chapter-body">

      <h2>What are Operators?</h2>
      <p>Operators waa symbols ama keywords loo isticmaalo in lagu sameeyo operations sida addition, subtraction, comparison, iyo more.</p>

<pre><code><span class="kw">let</span> a = <span class="num">10</span>;
<span class="kw">let</span> b = <span class="num">5</span>;

<span class="kw">console</span>.log(a + b); <span class="cm">// 15</span>
</code><div class="code-label">Basic Operator</div></pre>

      <h2>Arithmetic Operators</h2>
      <p>Waxaa loo isticmaalaa xisaab sida isku darka, kala jarka, iyo qeybinta.</p>

<pre><code><span class="kw">let</span> x = <span class="num">20</span>;
<span class="kw">let</span> y = <span class="num">4</span>;

<span class="kw">console</span>.log(x + y); <span class="cm">// Add</span>
<span class="kw">console</span>.log(x - y); <span class="cm">// Subtract</span>
<span class="kw">console</span>.log(x * y); <span class="cm">// Multiply</span>
<span class="kw">console</span>.log(x / y); <span class="cm">// Divide</span>
<span class="kw">console</span>.log(x % y); <span class="cm">// Modulus</span>
</code><div class="code-label">Arithmetic</div></pre>

      <h2>Assignment Operators</h2>
      <p>Waxaa loo isticmaalaa in value lagu siiyo variable ama lagu cusboonaysiiyo.</p>

<pre><code><span class="kw">let</span> score = <span class="num">10</span>;

score += <span class="num">5</span>; <span class="cm">// score = score + 5</span>
score -= <span class="num">2</span>;
score *= <span class="num">3</span>;

<span class="kw">console</span>.log(score);
</code><div class="code-label">Assignment</div></pre>

      <h2>Comparison Operators</h2>
      <p>Waxay isbarbardhigaan laba value waxayna soo celiyaan true ama false.</p>

<pre><code><span class="kw">let</span> a = <span class="num">10</span>;
<span class="kw">let</span> b = <span class="num">20</span>;

<span class="kw">console</span>.log(a == b);  <span class="cm">// equal</span>
<span class="kw">console</span>.log(a != b);  <span class="cm">// not equal</span>
<span class="kw">console</span>.log(a &gt; b);   <span class="cm">// greater than</span>
<span class="kw">console</span>.log(a &lt; b);   <span class="cm">// less than</span>
<span class="kw">console</span>.log(a &gt;= b);  <span class="cm">// greater or equal</span>
<span class="kw">console</span>.log(a &lt;= b);  <span class="cm">// less or equal</span>
</code><div class="code-label">Comparison</div></pre>

      <h2>Logical Operators</h2>
      <p>Logical operators waxaa loo isticmaalaa decisions (true/false logic).</p>

<pre><code><span class="kw">let</span> isAdult = <span class="kw">true</span>;
<span class="kw">let</span> hasID = <span class="kw">false</span>;

<span class="kw">console</span>.log(isAdult &amp;&amp; hasID); <span class="cm">// AND</span>
<span class="kw">console</span>.log(isAdult || hasID); <span class="cm">// OR</span>
<span class="kw">console</span>.log(!isAdult);         <span class="cm">// NOT</span>
</code><div class="code-label">Logical</div></pre>

      <h2>Increment & Decrement</h2>
      <p>Waxaa loo isticmaalaa kordhinta ama dhimista value.</p>

<pre><code><span class="kw">let</span> count = <span class="num">1</span>;

count++; <span class="cm">// +1</span>
count++; <span class="cm">// +1</span>
count--; <span class="cm">// -1</span>

<span class="kw">console</span>.log(count);
</code><div class="code-label">Increment</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Comparison operators (==) iyo (===) ma aha isku mid. <code>===</code> waxay hubisaa value + type si sax ah.
        </div>
      </div>

      <h2>Expressions</h2>
      <p>Expression waa combination variables, values, iyo operators oo soo saara result.</p>

<pre><code><span class="kw">let</span> result = (<span class="num">10</span> + <span class="num">5</span>) * <span class="num">2</span>;

<span class="kw">console</span>.log(result);
</code><div class="code-label">Expression</div></pre>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Functions</code> iyo sida code dib loogu isticmaalo si nadiif ah.
        </div>
      </div>

    </div>
  `
},
{
  title: "Functions & Scope",
  subtitle: "Reusable logic and variable visibility",
  readTime: "~7 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 02</div>
      <h1 class="chapter-heading">Functions <em>&</em> Scope</h1>
      <p class="chapter-lead">Functions waa blocks code ah oo dib loo isticmaali karo, halka scope uu go'aamiyo halka variables-ka laga heli karo gudaha program-ka.</p>
    </div>

    <div class="chapter-body">

      <h2>What is a Function?</h2>
      <p>Function waa qayb code ah oo qabata shaqo gaar ah. Waxay kaa caawisaa inaad iska ilaaliso code badan oo soo noqnoqda.</p>

<pre><code><span class="kw">function</span> <span class="fn">greet</span>() {
  <span class="kw">console</span>.log(<span class="str">"Hello JavaScript"</span>);
}

<span class="fn">greet</span>();
</code><div class="code-label">Basic Function</div></pre>

      <h2>Function Parameters</h2>
      <p>Parameters waa xogta function-ka loo gudbiyo marka la wacayo.</p>

<pre><code><span class="kw">function</span> <span class="fn">welcome</span>(name) {
  <span class="kw">console</span>.log(<span class="str">"Welcome "</span> + name);
}

<span class="fn">welcome</span>(<span class="str">"Abdirizak"</span>);
</code><div class="code-label">Parameters</div></pre>

      <h2>Return Keyword</h2>
      <p><strong>return</strong> waxaa loo isticmaalaa in function-ku soo celiyo value.</p>

<pre><code><span class="kw">function</span> <span class="fn">add</span>(a, b) {
  <span class="kw">return</span> a + b;
}

<span class="kw">let</span> result = <span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>);

<span class="kw">console</span>.log(result);
</code><div class="code-label">Return Value</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Function-ka leh <code>return</code> wuxuu soo saari karaa value aad meel kale ku isticmaali karto.
        </div>
      </div>

      <h2>Function Expression</h2>
      <p>Function waxaa sidoo kale lagu kaydin karaa variable.</p>

<pre><code><span class="kw">const</span> sayHi = <span class="kw">function</span>() {
  <span class="kw">console</span>.log(<span class="str">"Hi there!"</span>);
};

<span class="fn">sayHi</span>();
</code><div class="code-label">Function Expression</div></pre>

      <h2>Arrow Functions</h2>
      <p>Arrow Functions waa hab casri ah oo loo qoro functions gudaha JavaScript.</p>

<pre><code><span class="kw">const</span> multiply = (a, b) => {
  <span class="kw">return</span> a * b;
};

<span class="kw">console</span>.log(<span class="fn">multiply</span>(<span class="num">4</span>, <span class="num">2</span>));
</code><div class="code-label">Arrow Function</div></pre>

      <h2>What is Scope?</h2>
      <p>Scope wuxuu go'aamiyaa halka variable laga isticmaali karo gudaha code-ka.</p>

      <h2>Global Scope</h2>
      <p>Variable-ka lagu sameeyo banaanka function-ka waxaa loo yaqaan global variable.</p>

<pre><code><span class="kw">let</span> website = <span class="str">"JavaScript Mastery"</span>;

<span class="kw">function</span> <span class="fn">showWebsite</span>() {
  <span class="kw">console</span>.log(website);
}

<span class="fn">showWebsite</span>();
</code><div class="code-label">Global Scope</div></pre>

      <h2>Local Scope</h2>
      <p>Variables-ka lagu sameeyo gudaha function-ka waxaa isticmaali kara oo keliya function-kaas.</p>

<pre><code><span class="kw">function</span> <span class="fn">test</span>() {
  <span class="kw">let</span> message = <span class="str">"Local Variable"</span>;

  <span class="kw">console</span>.log(message);
}

<span class="fn">test</span>();

<span class="cm">// console.log(message); ❌ Error</span>
</code><div class="code-label">Local Scope</div></pre>

      <h2>Block Scope</h2>
      <p><strong>let</strong> iyo <strong>const</strong> waxay leeyihiin block scope.</p>

<pre><code><span class="kw">if</span> (<span class="kw">true</span>) {
  <span class="kw">let</span> age = <span class="num">20</span>;

  <span class="kw">console</span>.log(age);
}

<span class="cm">// console.log(age); ❌ Error</span>
</code><div class="code-label">Block Scope</div></pre>

      <div class="callout">
        <div class="callout-icon">⚠️</div>
        <div class="callout-body">
          <strong>Best Practice:</strong> Isticmaal <code>let</code> iyo <code>const</code> sababtoo ah waxay leeyihiin block scope oo ammaan badan marka loo eego <code>var</code>.
        </div>
      </div>

      <h2>Nested Functions</h2>
      <p>Function gudaha function kale ku jira wuxuu heli karaa variables-ka parent-kiisa.</p>

<pre><code><span class="kw">function</span> <span class="fn">outer</span>() {
  <span class="kw">let</span> username = <span class="str">"Abdirizak"</span>;

  <span class="kw">function</span> <span class="fn">inner</span>() {
    <span class="kw">console</span>.log(username);
  }

  <span class="fn">inner</span>();
}

<span class="fn">outer</span>();
</code><div class="code-label">Nested Functions</div></pre>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Arrays</code> & <code>Objects</code> iyo sida loo kaydiyo xog badan gudaha JavaScript.
        </div>
      </div>

    </div>
  `
},
 {
  title: "Arrays and Objects",
  subtitle: "Kaydinta iyo Maareynta Xogta",
  readTime: "~10 min",
  content: `

  <div class="chapter-hero">

    <div class="chapter-number">
      Chapter 03
    </div>

    <h1 class="chapter-heading">
      Arrays <em>&</em> Objects
    </h1>

    <p class="chapter-lead">
      Casharkan waxaad ku baranaysaa Arrays iyo Objects,
      sida xog badan loo kaydiyo,
      iyo sida JavaScript loogu abaabulo data.
    </p>

  </div>

  <div class="chapter-body">

    <h2>Arrays</h2>

    <p>
      Array waa data structure kaydin kara
      wax ka badan hal value hal variable gudaheeda.
    </p>

    <p>
      Element kasta oo array-ga ku jira
      wuxuu leeyahay index ka bilaabma <strong>0</strong>.
    </p>

<pre><code><span class="kw">let</span> fruits = [

  <span class="str">"apple"</span>,

  <span class="str">"banana"</span>,

  <span class="str">"cherry"</span>

];

console.log(fruits[<span class="num">0</span>]);

console.log(fruits[<span class="num">1</span>]);

console.log(fruits[<span class="num">2</span>]);
</code><div class="code-label">Basic Array</div></pre>

    <h2>Sababta Arrays Loo Adeegsado</h2>

    <ul>
      <li>In xog badan lagu kaydiyo hal variable</li>
      <li>In si fudud loo helo data</li>
      <li>In loops lagu dul maro</li>
    </ul>

    <h2>Array Methods</h2>

    <p>
      JavaScript wuxuu leeyahay methods badan
      oo lagu maamulo arrays.
    </p>

    <h3>push()</h3>

    <p>
      push() wuxuu ku daraa element cusub
      dhammaadka array-ga.
    </p>

<pre><code><span class="kw">let</span> fruits = [

  <span class="str">"apple"</span>,

  <span class="str">"banana"</span>

];

fruits.push(<span class="str">"orange"</span>);

console.log(fruits);
</code><div class="code-label">push()</div></pre>

    <h3>pop()</h3>

    <p>
      pop() wuxuu saaraa element-ka ugu dambeeya.
    </p>

<pre><code><span class="kw">let</span> fruits = [

  <span class="str">"apple"</span>,

  <span class="str">"banana"</span>,

  <span class="str">"orange"</span>

];

fruits.pop();

console.log(fruits);
</code><div class="code-label">pop()</div></pre>

    <h3>shift()</h3>

    <p>
      shift() wuxuu saaraa element-ka ugu horeeya.
    </p>

<pre><code><span class="kw">let</span> colors = [

  <span class="str">"red"</span>,

  <span class="str">"green"</span>,

  <span class="str">"blue"</span>

];

colors.shift();

console.log(colors);
</code><div class="code-label">shift()</div></pre>

    <h3>unshift()</h3>

    <p>
      unshift() wuxuu ku daraa element
      bilowga array-ga.
    </p>

<pre><code><span class="kw">let</span> colors = [

  <span class="str">"green"</span>,

  <span class="str">"blue"</span>

];

colors.unshift(<span class="str">"red"</span>);

console.log(colors);
</code><div class="code-label">unshift()</div></pre>

    <h3>length</h3>

    <p>
      length wuxuu soo celiyaa tirada
      elements-ka array-ga.
    </p>

<pre><code><span class="kw">let</span> fruits = [

  <span class="str">"apple"</span>,

  <span class="str">"banana"</span>,

  <span class="str">"orange"</span>

];

console.log(fruits.length);
</code><div class="code-label">length</div></pre>

    <div class="callout">

      <div class="callout-icon">💡</div>

      <div class="callout-body">
        Arrays waxay aad ugu fiican yihiin
        kaydinta lists sida users, products,
        ama messages.
      </div>

    </div>

    <h2>Objects</h2>

    <p>
      Object waa ururin properties ah.
      Property kastaa wuxuu leeyahay
      key iyo value.
    </p>

<pre><code><span class="kw">let</span> person = {

  name:
  <span class="str">"Alice"</span>,

  age:
  <span class="num">25</span>,

  city:
  <span class="str">"London"</span>

};

console.log(person.name);

console.log(person.age);

console.log(person.city);
</code><div class="code-label">Basic Object</div></pre>

    <h2>Sababta Objects Loo Adeegsado</h2>

    <ul>
      <li>In xogta loo habeeyo si nadiif ah</li>
      <li>In properties lagu magacaabo keys</li>
      <li>In functions lagu kaydiyo object-ka</li>
    </ul>

    <h2>Adding Properties</h2>

    <p>
      Waxaad object ku dari kartaa property cusub.
    </p>

<pre><code><span class="kw">let</span> car = {

  make:
  <span class="str">"Toyota"</span>,

  model:
  <span class="str">"Corolla"</span>

};

car.year = <span class="num">2025</span>;

console.log(car);
</code><div class="code-label">Adding Property</div></pre>

    <h2>Modifying Properties</h2>

    <p>
      Waxaad beddeli kartaa value-ga property.
    </p>

<pre><code><span class="kw">let</span> person = {

  name:
  <span class="str">"Ahmed"</span>,

  age:
  <span class="num">20</span>

};

person.age = <span class="num">21</span>;

console.log(person);
</code><div class="code-label">Modify Property</div></pre>

    <h2>Methods in Objects</h2>

    <p>
      Object wuxuu sidoo kale yeelan karaa functions.
      Functions-ka object-ka ku jira
      waxaa loo yaqaan methods.
    </p>

<pre><code><span class="kw">let</span> person = {

  name:
  <span class="str">"Ali"</span>,

  greet: <span class="kw">function</span>() {

    console.log(
      <span class="str">"Hello "</span> + this.name
    );

  }

};

person.greet();
</code><div class="code-label">Object Method</div></pre>

    <h2>Arrays of Objects</h2>

    <p>
      Array wuxuu kaydin karaa objects badan.
      Tani waxay faa'iido u leedahay
      xogaha waaweyn sida users ama products.
    </p>

<pre><code><span class="kw">let</span> students = [

  {

    name:
    <span class="str">"Ali"</span>,

    age:
    <span class="num">20</span>

  },

  {

    name:
    <span class="str">"Ahmed"</span>,

    age:
    <span class="num">22</span>

  },

  {

    name:
    <span class="str">"Fatima"</span>,

    age:
    <span class="num">19</span>

  }

];

console.log(students[<span class="num">0</span>].name);

console.log(students[<span class="num">1</span>].age);

console.log(students[<span class="num">2</span>].name);
</code><div class="code-label">Array of Objects</div></pre>

    <h2>Real World Example</h2>

<pre><code><span class="kw">let</span> library = [

  {

    title:
    <span class="str">"JavaScript Basics"</span>,

    author:
    <span class="str">"Abdirizak"</span>

  },

  {

    title:
    <span class="str">"Learn HTML"</span>,

    author:
    <span class="str">"Ahmed"</span>

  }

];

console.log(library[<span class="num">0</span>].title);

console.log(library[<span class="num">1</span>].author);
</code><div class="code-label">Library Example</div></pre>

    <h2>Gunaanad</h2>

    <p>
      Hadda waxaad baratay:
    </p>

    <ul>
      <li>Arrays iyo sida loo isticmaalo</li>
      <li>Array methods-ka muhiimka ah</li>
      <li>Objects iyo properties</li>
      <li>Methods gudaha objects</li>
      <li>Arrays of Objects</li>
    </ul>

  </div>

  `
},
 {
  title: "Arrays & Objects",
  subtitle: "Storing and organizing data",
  readTime: "~8 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 05</div>
      <h1 class="chapter-heading">Arrays <em>&</em> Objects</h1>
      <p class="chapter-lead">Arrays iyo Objects waa laba ka mid ah data structures-ka ugu muhiimsan JavaScript. Waxay kuu ogolaanayaan inaad kaydiso xog badan oo habaysan.</p>
    </div>

    <div class="chapter-body">

      <h2>What is an Array?</h2>
      <p>Array waa list ama collection oo xog ah. Waxay kaydisaa multiple values hal variable gudaheed.</p>

<pre><code><span class="kw">let</span> fruits = [<span class="str">"Apple"</span>, <span class="str">"Banana"</span>, <span class="str">"Mango"</span>];

<span class="kw">console</span>.log(fruits);
<span class="kw">console</span>.log(fruits[0]); <span class="cm">// Apple</span>
</code><div class="code-label">Array Basics</div></pre>

      <h2>Array Index</h2>
      <p>Array element kasta wuxuu leeyahay index ka bilaabma 0.</p>

<pre><code><span class="kw">let</span> colors = [<span class="str">"Red"</span>, <span class="str">"Green"</span>, <span class="str">"Blue"</span>];

<span class="kw">console</span>.log(colors[1]); <span class="cm">// Green</span>
</code><div class="code-label">Indexing</div></pre>

      <h2>Array Methods</h2>
      <p>JavaScript arrays waxay leeyihiin methods badan oo fududeeya shaqada.</p>

<pre><code><span class="kw">let</span> numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

numbers.push(<span class="num">4</span>);     <span class="cm">// add last</span>
numbers.pop();        <span class="cm">// remove last</span>
numbers.unshift(<span class="num">0</span>); <span class="cm">// add first</span>
numbers.shift();      <span class="cm">// remove first</span>

<span class="kw">console</span>.log(numbers);
</code><div class="code-label">Array Methods</div></pre>

      <h2>Looping Through Arrays</h2>
      <p>Waxaad array-ga ku dhex mari kartaa loop si aad u akhrido dhammaan values.</p>

<pre><code><span class="kw">let</span> items = [<span class="str">"Book"</span>, <span class="str">"Pen"</span>, <span class="str">"Laptop"</span>];

<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; items.length; i++) {
  <span class="kw">console</span>.log(items[i]);
}
</code><div class="code-label">Loop Array</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Arrays waxaa fiican in loo isticmaalo data la isku mid ah sida list products, users, ama numbers.
        </div>
      </div>

      <h2>What is an Object?</h2>
      <p>Object waa collection key-value pairs ah. Waxay kaydisaa xog faahfaahsan.</p>

<pre><code><span class="kw">let</span> user = {
  name: <span class="str">"Abdirizak"</span>,
  age: <span class="num">20</span>,
  city: <span class="str">"Jijiga"</span>
};

<span class="kw">console</span>.log(user);
</code><div class="code-label">Object Basics</div></pre>

      <h2>Accessing Object Properties</h2>
      <p>Waxaad ku heli kartaa properties-ka object-ka dot notation ama bracket notation.</p>

<pre><code><span class="kw">let</span> car = {
  brand: <span class="str">"Toyota"</span>,
  model: <span class="str">"Corolla"</span>,
  year: <span class="num">2020</span>
};

<span class="kw">console</span>.log(car.brand);
<span class="kw">console</span>.log(car[<span class="str">"model"</span>]);
</code><div class="code-label">Accessing Data</div></pre>

      <h2>Updating Objects</h2>
      <p>Object properties waa la badali karaa ama lagu dari karaa.</p>

<pre><code><span class="kw">let</span> person = {
  name: <span class="str">"Ali"</span>,
  age: <span class="num">25</span>
};

person.age = <span class="num">26</span>;
person.city = <span class="str">"Mogadishu"</span>;

<span class="kw">console</span>.log(person);
</code><div class="code-label">Updating Object</div></pre>

      <h2>Object with Methods</h2>
      <p>Objects waxay sidoo kale yeelan karaan functions (methods).</p>

<pre><code><span class="kw">let</span> student = {
  name: <span class="str">"Ayaan"</span>,
  greet: <span class="kw">function</span>() {
    <span class="kw">console</span>.log(<span class="str">"Hello "</span> + this.name);
  }
};

student.greet();
</code><div class="code-label">Object Methods</div></pre>

      <h2>Array vs Object</h2>

      <pre><code><span class="cm">// Array → list of items</span>
<span class="kw">let</span> fruits = [<span class="str">"Apple"</span>, <span class="str">"Banana"</span>];

<span class="cm">// Object → structured data</span>
<span class="kw">let</span> user = {
  name: <span class="str">"Ali"</span>,
  age: <span class="num">22</span>
};
</code><div class="code-label">Comparison</div></pre>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Loops & Iterations</code> iyo sida loo maamulo repetition gudaha JavaScript.
        </div>
      </div>

    </div>
  `
},
 {
  title: "Loops & Iteration",
  subtitle: "Repeating actions in JavaScript",
  readTime: "~7 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 06</div>
      <h1 class="chapter-heading">Loops <em>&</em> Iteration</h1>
      <p class="chapter-lead">Loops waa hab JavaScript u isticmaalo inuu ku celceliyo code-ka ilaa shuruud la gaaro. Waxay ka dhigaan programming-ka mid awood badan oo automation ah.</p>
    </div>

    <div class="chapter-body">

      <h2>What is a Loop?</h2>
      <p>Loop waa structure ku celceliya code marar badan ilaa condition-ka uu noqdo false.</p>

<pre><code><span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; <span class="num">5</span>; i++) {
  <span class="kw">console</span>.log(<span class="str">"Hello"</span>);
}
</code><div class="code-label">Basic For Loop</div></pre>

      <h2>For Loop</h2>
      <p>For loop waxaa loo isticmaalaa marka aad ogtahay inta jeer ee code-ku soconayo.</p>

<pre><code><span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">1</span>; i &lt;= <span class="num">10</span>; i++) {
  <span class="kw">console</span>.log(i);
}
</code><div class="code-label">Counting Loop</div></pre>

      <h2>Looping Through Arrays</h2>
      <p>Loops waxaa badanaa loo isticmaalaa arrays si loo akhriyo dhammaan items-ka.</p>

<pre><code><span class="kw">let</span> fruits = [<span class="str">"Apple"</span>, <span class="str">"Banana"</span>, <span class="str">"Mango"</span>];

<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; fruits.length; i++) {
  <span class="kw">console</span>.log(fruits[i]);
}
</code><div class="code-label">Array Loop</div></pre>

      <h2>While Loop</h2>
      <p>While loop wuu socdaa ilaa condition-ku noqdo false.</p>

<pre><code><span class="kw">let</span> i = <span class="num">0</span>;

<span class="kw">while</span> (i &lt; <span class="num">5</span>) {
  <span class="kw">console</span>.log(i);
  i++;
}
</code><div class="code-label">While Loop</div></pre>

      <h2>Do...While Loop</h2>
      <p>Do...while wuxuu code-ka fulinayaa ugu yaraan hal mar xitaa haddii condition-ku false yahay.</p>

<pre><code><span class="kw">let</span> i = <span class="num">0</span>;

<span class="kw">do</span> {
  <span class="kw">console</span>.log(i);
  i++;
} <span class="kw">while</span> (i &lt; <span class="num">5</span>);
</code><div class="code-label">Do While</div></pre>

      <h2>Break Statement</h2>
      <p><strong>break</strong> wuxuu joojiyaa loop-ka marka condition gaar ah la gaaro.</p>

<pre><code><span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i++) {
  <span class="kw">if</span> (i === <span class="num">5</span>) {
    <span class="kw">break</span>;
  }
  <span class="kw">console</span>.log(i);
}
</code><div class="code-label">Break Loop</div></pre>

      <h2>Continue Statement</h2>
      <p><strong>continue</strong> wuxuu skip gareeyaa iteration-ka current-ka ah.</p>

<pre><code><span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; <span class="num">5</span>; i++) {
  <span class="kw">if</span> (i === <span class="num">2</span>) {
    <span class="kw">continue</span>;
  }
  <span class="kw">console</span>.log(i);
}
</code><div class="code-label">Continue Loop</div></pre>

      <h2>For...of Loop</h2>
      <p>For...of waa hab casri ah oo lagu loop gareeyo arrays.</p>

<pre><code><span class="kw">let</span> colors = [<span class="str">"Red"</span>, <span class="str">"Green"</span>, <span class="str">"Blue"</span>];

<span class="kw">for</span> (<span class="kw">let</span> color <span class="kw">of</span> colors) {
  <span class="kw">console</span>.log(color);
}
</code><div class="code-label">For...of</div></pre>

      <h2>For...in Loop</h2>
      <p>For...in waxaa loo isticmaalaa objects si loo akhriyo keys-ka.</p>

<pre><code><span class="kw">let</span> user = {
  name: <span class="str">"Ali"</span>,
  age: <span class="num">22</span>,
  city: <span class="str">"Jijiga"</span>
};

<span class="kw">for</span> (<span class="kw">let</span> key <span class="kw">in</span> user) {
  <span class="kw">console</span>.log(key + <span class="str">": "</span> + user[key]);
}
</code><div class="code-label">For...in</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> For...of waxaa loo isticmaalaa arrays, For...in waxaa loo isticmaalaa objects.
        </div>
      </div>

      <h2>Why Loops Matter</h2>
      <p>Loops waxay kaa caawiyaan inaad automation sameyso, time badbaadiso, iyo code nadiif ah qorto.</p>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Functions Advanced</code> iyo sida loo dhiso logic adag oo reusable ah.
        </div>
      </div>

    </div>
  `
},
{
  title: "Advanced Functions",
  subtitle: "Leveling up your logic",
  readTime: "~8 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 07</div>
      <h1 class="chapter-heading">Advanced <em>Functions</em></h1>
      <p class="chapter-lead">Functions advanced waxay kaa caawinayaan inaad qorto code nadiif ah, reusable ah, iyo logic adag oo fudud in la fahmo.</p>
    </div>

    <div class="chapter-body">

      <h2>Recap: What is a Function?</h2>
      <p>Function waa block code ah oo la wici karo marar badan si uu shaqo gaar ah u qabto.</p>

<pre><code><span class="kw">function</span> <span class="fn">sayHello</span>() {
  <span class="kw">console</span>.log(<span class="str">"Hello!"</span>);
}

<span class="fn">sayHello</span>();
</code><div class="code-label">Basic Function</div></pre>

      <h2>Function with Parameters</h2>
      <p>Parameters waxay kuu ogolaanayaan inaad function-ka u gudbiso data kala duwan.</p>

<pre><code><span class="kw">function</span> <span class="fn">greet</span>(name) {
  <span class="kw">console</span>.log(<span class="str">"Hello "</span> + name);
}

<span class="fn">greet</span>(<span class="str">"Abdirizak"</span>);
<span class="fn">greet</span>(<span class="str">"Ali"</span>);
</code><div class="code-label">Parameters</div></pre>

      <h2>Default Parameters</h2>
      <p>Haddii value aan la siin, function-ku wuxuu isticmaalaa default value.</p>

<pre><code><span class="kw">function</span> <span class="fn">welcome</span>(name = <span class="str">"Guest"</span>) {
  <span class="kw">console</span>.log(<span class="str">"Welcome "</span> + name);
}

<span class="fn">welcome</span>();
<span class="fn">welcome</span>(<span class="str">"Ayaan"</span>);
</code><div class="code-label">Default Params</div></pre>

      <h2>Return Values</h2>
      <p><strong>return</strong> wuxuu function-ka ka dhigaa mid soo celiya natiijo.</p>

<pre><code><span class="kw">function</span> <span class="fn">add</span>(a, b) {
  <span class="kw">return</span> a + b;
}

<span class="kw">let</span> result = <span class="fn">add</span>(<span class="num">10</span>, <span class="num">5</span>);
<span class="kw">console</span>.log(result);
</code><div class="code-label">Return</div></pre>

      <h2>Function Expression</h2>
      <p>Function waxaa lagu kaydin karaa variable.</p>

<pre><code><span class="kw">const</span> multiply = <span class="kw">function</span>(a, b) {
  <span class="kw">return</span> a * b;
};

<span class="kw">console</span>.log(<span class="fn">multiply</span>(<span class="num">3</span>, <span class="num">4</span>));
</code><div class="code-label">Function Expression</div></pre>

      <h2>Arrow Functions</h2>
      <p>Arrow functions waa syntax casri ah oo gaaban.</p>

<pre><code><span class="kw">const</span> subtract = (a, b) => {
  <span class="kw">return</span> a - b;
};

<span class="kw">console</span>.log(<span class="fn">subtract</span>(<span class="num">10</span>, <span class="num">3</span>));
</code><div class="code-label">Arrow Function</div></pre>

      <h2>Short Arrow Function</h2>
      <p>Haddii hal line kaliya jirto, return waa la iska dhaafi karaa.</p>

<pre><code><span class="kw">const</span> square = x => x * x;

<span class="kw">console</span>.log(<span class="fn">square</span>(<span class="num">5</span>));
</code><div class="code-label">Short Arrow</div></pre>

      <h2>Higher Order Functions</h2>
      <p>Functions waxay qaadan karaan functions kale ama soo celin karaan functions.</p>

<pre><code><span class="kw">function</span> <span class="fn">operate</span>(a, b, callback) {
  <span class="kw">return</span> callback(a, b);
}

<span class="kw">const</span> sum = (a, b) => a + b;

<span class="kw">console</span>.log(<span class="fn">operate</span>(<span class="num">5</span>, <span class="num">3</span>, sum));
</code><div class="code-label">Higher Order</div></pre>

      <h2>Callback Functions</h2>
      <p>Callback waa function lagu gudbiyo function kale.</p>

<pre><code><span class="kw">function</span> <span class="fn">processUser</span>(name, callback) {
  <span class="kw">console</span>.log(<span class="str">"Processing "</span> + name);
  callback();
}

<span class="fn">processUser</span>(<span class="str">"Ali"</span>, () => {
  <span class="kw">console</span>.log(<span class="str">"Done!"</span>);
});
</code><div class="code-label">Callback</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Arrow functions waa best choice for short logic, laakiin normal functions waa fiican marka aad u baahan tahay readability ama this keyword.
        </div>
      </div>

      <h2>Why Advanced Functions Matter</h2>
      <p>Waxay kaa dhigaan developer awood leh oo qori kara reusable, clean, iyo scalable code.</p>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>DOM Manipulation</code> iyo sida JavaScript ula shaqeeyo web pages-ka.
        </div>
      </div>

    </div>
  `
},
{
  title: "Events Deep Dive",
  subtitle: "Making web pages interactive",
  readTime: "~8 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 09</div>
      <h1 class="chapter-heading">Events <em>Deep Dive</em></h1>
      <p class="chapter-lead">Events waa waxa ka dhigaya website-ka mid interactive ah—clicks, typing, scrolling, iyo user actions kale.</p>
    </div>

    <div class="chapter-body">

      <h2>What is an Event?</h2>
      <p>Event waa action uu user sameeyo ama browser-ku sameeyo, sida click ama page load.</p>

<pre><code><span class="kw">let</span> btn = document.getElementById(<span class="str">"btn"</span>);

btn.addEventListener(<span class="str">"click"</span>, () => {
  <span class="kw">console</span>.log(<span class="str">"Button clicked!"</span>);
});
</code><div class="code-label">Click Event</div></pre>

      <h2>Common Events</h2>
      <p>JavaScript wuxuu leeyahay events badan oo la isticmaalo.</p>

<pre><code><span class="cm">// Click</span>
element.addEventListener(<span class="str">"click"</span>, fn);

<span class="cm">// Input</span>
element.addEventListener(<span class="str">"input"</span>, fn);

<span class="cm">// Mouse Over</span>
element.addEventListener(<span class="str">"mouseover"</span>, fn);

<span class="cm">// Keydown</span>
document.addEventListener(<span class="str">"keydown"</span>, fn);
</code><div class="code-label">Common Events</div></pre>

      <h2>Mouse Events</h2>
      <p>Mouse events waxay dhacaan marka user-ku mouse isticmaalo.</p>

<pre><code><span class="kw">let</span> box = document.getElementById(<span class="str">"box"</span>);

box.addEventListener(<span class="str">"mouseover"</span>, () => {
  box.style.background = <span class="str">"yellow"</span>;
});

box.addEventListener(<span class="str">"mouseout"</span>, () => {
  box.style.background = <span class="str">"white"</span>;
});
</code><div class="code-label">Mouse Events</div></pre>

      <h2>Keyboard Events</h2>
      <p>Keyboard events waxay qabtaan user input marka la qorayo.</p>

<pre><code><span class="kw">document</span>.addEventListener(<span class="str">"keydown"</span>, (e) => {
  <span class="kw">console</span>.log(<span class="str">"Key pressed:"</span>, e.key);
});
</code><div class="code-label">Keyboard Event</div></pre>

      <h2>Form Events</h2>
      <p>Forms waa meelaha ugu badan ee events loo isticmaalo.</p>

<pre><code><span class="kw">let</span> form = document.getElementById(<span class="str">"form"</span>);

form.addEventListener(<span class="str">"submit"</span>, (e) => {
  e.preventDefault();
  <span class="kw">console</span>.log(<span class="str">"Form submitted"</span>);
});
</code><div class="code-label">Form Event</div></pre>

      <h2>Event Object</h2>
      <p>Event object wuxuu bixiyaa information ku saabsan event-ka dhacay.</p>

<pre><code><span class="kw">document</span>.addEventListener(<span class="str">"click"</span>, (e) => {
  <span class="kw">console</span>.log(e.target);
});
</code><div class="code-label">Event Object</div></pre>

      <h2>Event Bubbling</h2>
      <p>Event bubbling waa marka event-ka uu ka bilaabmo child element una gudbo parent.</p>

<pre><code><span class="kw">document</span>.getElementById(<span class="str">"child"</span>)
  .addEventListener(<span class="str">"click"</span>, () => {
    <span class="kw">console</span>.log(<span class="str">"Child clicked"</span>);
});
</code><div class="code-label">Bubbling</div></pre>

      <h2>Stopping Events</h2>
      <p><code>preventDefault()</code> iyo <code>stopPropagation()</code> ayaa loo isticmaalaa control events.</p>

<pre><code><span class="kw">form</span>.addEventListener(<span class="str">"submit"</span>, (e) => {
  e.preventDefault();
});
</code><div class="code-label">Prevent Default</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Events waa heart-ka interactivity-ga web apps—wax kasta oo user sameeyo waxaa lagu maamulaa events.
        </div>
      </div>

      <h2>Mini Project Idea</h2>
      <p>Samee button beddela color-ka page-ka marka la click gareeyo.</p>

<pre><code><span class="kw">let</span> btn = document.getElementById(<span class="str">"btn"</span>);

btn.addEventListener(<span class="str">"click"</span>, () => {
  document.body.style.background = <span class="str">"lightblue"</span>;
});
</code><div class="code-label">Mini Project</div></pre>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Asynchronous JavaScript</code> (setTimeout, promises, async/await).
        </div>
      </div>

    </div>
  `
},
{
  title: "Asynchronous JavaScript",
  subtitle: "Handling time, data, and real-world apps",
  readTime: "~9 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 10</div>
      <h1 class="chapter-heading">Asynchronous <em>JavaScript</em></h1>
      <p class="chapter-lead">Asynchronous JavaScript wuxuu kuu ogolaanayaa inaad qabato tasks qaata waqti (like APIs, timers) adigoon block-gareyn app-ka.</p>
    </div>

    <div class="chapter-body">

      <h2>What is Synchronous vs Asynchronous?</h2>
      <p>Synchronous code wuxuu socdaa line by line, halka asynchronous uu shaqooyin kala duwan si isku mar ah u maamulo.</p>

<pre><code><span class="cm">// Synchronous</span>
<span class="kw">console</span>.log(<span class="str">"1"</span>);
<span class="kw">console</span>.log(<span class="str">"2"</span>);
<span class="kw">console</span>.log(<span class="str">"3"</span>);
</code><div class="code-label">Sync Example</div></pre>

      <h2>setTimeout</h2>
      <p>setTimeout wuxuu delay gareeyaa execution-ka function.</p>

<pre><code><span class="kw">console</span>.log(<span class="str">"Start"</span>);

setTimeout(() => {
  <span class="kw">console</span>.log(<span class="str">"After 2 seconds"</span>);
}, <span class="num">2000</span>);

<span class="kw">console</span>.log(<span class="str">"End"</span>);
</code><div class="code-label">setTimeout</div></pre>

      <h2>setInterval</h2>
      <p>setInterval wuxuu code-ka ku celceliyaa waqti go'an kadib.</p>

<pre><code><span class="kw">setInterval</span>(() => {
  <span class="kw">console</span>.log(<span class="str">"Running..."</span>);
}, <span class="num">1000</span>);
</code><div class="code-label">setInterval</div></pre>

      <h2>Callbacks</h2>
      <p>Callback waa function loo gudbiyo function kale si uu u shaqeeyo kadib.</p>

<pre><code><span class="kw">function</span> <span class="fn">fetchData</span>(callback) {
  setTimeout(() => {
    <span class="kw">console</span>.log(<span class="str">"Data loaded"</span>);
    callback();
  }, <span class="num">2000</span>);
}

<span class="fn">fetchData</span>(() => {
  <span class="kw">console</span>.log(<span class="str">"Callback executed"</span>);
});
</code><div class="code-label">Callback</div></pre>

      <h2>Promises</h2>
      <p>Promise waa object matala future result (success or failure).</p>

<pre><code><span class="kw">let</span> myPromise = <span class="kw">new</span> Promise((resolve, reject) => {
  <span class="kw">let</span> success = <span class="kw">true</span>;

  <span class="kw">if</span> (success) {
    resolve(<span class="str">"Done successfully"</span>);
  } <span class="kw">else</span> {
    reject(<span class="str">"Error happened"</span>);
  }
});

myPromise.then(result => {
  <span class="kw">console</span>.log(result);
}).catch(error => {
  <span class="kw">console</span>.log(error);
});
</code><div class="code-label">Promise</div></pre>

      <h2>Async / Await</h2>
      <p>Async/await waa hab clean ah oo lagu shaqeeyo promises.</p>

<pre><code><span class="kw">async function</span> <span class="fn">getData</span>() {
  <span class="kw">let</span> data = <span class="kw">await</span> <span class="kw">new</span> Promise(resolve => {
    setTimeout(() => resolve(<span class="str">"Data received"</span>), <span class="num">2000</span>);
  });

  <span class="kw">console</span>.log(data);
}

<span class="fn">getData</span>();
</code><div class="code-label">Async/Await</div></pre>

      <h2>Error Handling</h2>
      <p>Try/catch waxaa loo isticmaalaa catching errors.</p>

<pre><code><span class="kw">async function</span> <span class="fn">load</span>() {
  <span class="kw">try</span> {
    <span class="kw">throw</span> <span class="kw">new</span> Error(<span class="str">"Something went wrong"</span>);
  } <span class="kw">catch</span> (error) {
    <span class="kw">console</span>.log(error.message);
  }
}

<span class="fn">load</span>();
</code><div class="code-label">Try/Catch</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Async code waa muhiim marka aad la shaqaynayso APIs, databases, iyo real-world applications.
        </div>
      </div>

      <h2>Real World Example</h2>
      <p>Web apps sida YouTube, Facebook, iyo WhatsApp waxay si weyn u isticmaalaan asynchronous JavaScript.</p>

<pre><code><span class="kw">async function</span> <span class="fn">loadUser</span>() {
  <span class="kw">let</span> user = <span class="kw">await</span> fetch(<span class="str">"https://api.example.com/user"</span>);
  <span class="kw">console</span>.log(<span class="str">"User loaded"</span>);
}
</code><div class="code-label">API Example</div></pre>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>APIs & Fetch</code> iyo sida loo soo qaato data real ah internet-ka.
        </div>
      </div>

    </div>
  `
},
{
  title: "APIs & Fetch",
  subtitle: "Working with real data from the internet",
  readTime: "~9 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 11</div>
      <h1 class="chapter-heading">APIs <em>&</em> Fetch</h1>
      <p class="chapter-lead">APIs waxay kuu ogolaanayaan inaad la xiriirto servers si aad u hesho ama u dirto data real ah sida users, posts, ama weather.</p>
    </div>

    <div class="chapter-body">

      <h2>What is an API?</h2>
      <p>API (Application Programming Interface) waa bridge u dhexeeya frontend iyo backend systems.</p>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          API = sida waiter restaurant ka jooga oo kuu keena cunto (data) aad dalbatay.
        </div>
      </div>

      <h2>What is Fetch?</h2>
      <p>Fetch waa function JavaScript ah oo loo isticmaalo in data laga soo qaato API.</p>

<pre><code><span class="kw">fetch</span>(<span class="str">"https://api.example.com/data"</span>)
  .then(response => response.json())
  .then(data => {
    <span class="kw">console</span>.log(data);
  });
</code><div class="code-label">Basic Fetch</div></pre>

      <h2>Fetch with Async/Await</h2>
      <p>Habka modern-ka ah ee loo isticmaalo fetch waa async/await.</p>

<pre><code><span class="kw">async function</span> <span class="fn">getData</span>() {
  <span class="kw">let</span> response = <span class="kw">await</span> fetch(<span class="str">"https://jsonplaceholder.typicode.com/posts"</span>);
  <span class="kw">let</span> data = <span class="kw">await</span> response.json();

  <span class="kw">console</span>.log(data);
}

<span class="fn">getData</span>();
</code><div class="code-label">Async Fetch</div></pre>

      <h2>Understanding JSON</h2>
      <p>JSON waa format data loo isticmaalo APIs.</p>

<pre><code>{
  "name": "Ali",
  "age": 22,
  "city": "Jijiga"
}
</code><div class="code-label">JSON Example</div></pre>

      <h2>Parsing JSON</h2>
      <p>JavaScript wuxuu JSON u beddelaa object si loo isticmaalo.</p>

<pre><code><span class="kw">let</span> jsonString = <span class="str">'{"name":"Ali","age":22}'</span>;

<span class="kw">let</span> user = JSON.parse(jsonString);

<span class="kw">console</span>.log(user.name);
</code><div class="code-label">JSON Parse</div></pre>

      <h2>Sending Data (POST Request)</h2>
      <p>Waxaad sidoo kale API u diri kartaa data.</p>

<pre><code><span class="kw">fetch</span>(<span class="str">"https://api.example.com/users"</span>, {
  method: <span class="str">"POST"</span>,
  headers: {
    <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span>
  },
  body: JSON.stringify({
    name: <span class="str">"Abdirizak"</span>,
    age: <span class="num">20</span>
  })
});
</code><div class="code-label">POST Request</div></pre>

      <h2>Handling Errors</h2>
      <p>Always check errors marka aad API la shaqaynayso.</p>

<pre><code><span class="kw">async function</span> <span class="fn">loadData</span>() {
  <span class="kw">try</span> {
    <span class="kw">let</span> res = <span class="kw">await</span> fetch(<span class="str">"https://api.example.com/data"</span>);

    <span class="kw">if</span> (!res.ok) {
      <span class="kw">throw</span> <span class="kw">new</span> Error(<span class="str">"Network error"</span>);
    }

    <span class="kw">let</span> data = <span class="kw">await</span> res.json();
    <span class="kw">console</span>.log(data);

  } <span class="kw">catch</span> (err) {
    <span class="kw">console</span>.log(err.message);
  }
}
</code><div class="code-label">Error Handling</div></pre>

      <h2>Real API Example</h2>
      <p>Halkan waxaad ka helaysaa real data (posts) internet-ka.</p>

<pre><code><span class="kw">async function</span> <span class="fn">getPosts</span>() {
  <span class="kw">let</span> res = <span class="kw">await</span> fetch(<span class="str">"https://jsonplaceholder.typicode.com/posts"</span>);
  <span class="kw">let</span> posts = <span class="kw">await</span> res.json();

  posts.forEach(post => {
    <span class="kw">console</span>.log(post.title);
  });
}

<span class="fn">getPosts</span>();
</code><div class="code-label">Real API</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> APIs waa backbone-ka apps casriga ah sida Facebook, TikTok, iyo weather apps.
        </div>
      </div>

      <h2>Why APIs Matter</h2>
      <p>APIs waxay kuu ogolaanayaan inaad dhisto apps real-world ah oo xog toos ah internet-ka ka keena.</p>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>ES6+ Features</code> sida destructuring, spread operator, iyo modules.
        </div>
      </div>

    </div>
  `
},
{
  title: "ES6+ Features",
  subtitle: "Modern JavaScript power tools",
  readTime: "~9 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 12</div>
      <h1 class="chapter-heading">ES6+ <em>Features</em></h1>
      <p class="chapter-lead">ES6+ (ECMAScript 2015+) wuxuu keenay features casri ah oo JavaScript ka dhigay mid nadiif ah, awood leh, iyo fudud in la qoro.</p>
    </div>

    <div class="chapter-body">

      <h2>What is ES6?</h2>
      <p>ES6 waa update weyn oo lagu sameeyay JavaScript oo lagu daray features badan sida let/const, arrow functions, classes, iyo more.</p>

      <h2>Let & Const</h2>
      <p>ES6 wuxuu keenay <strong>let</strong> iyo <strong>const</strong> oo ka beddelay var.</p>

<pre><code><span class="kw">let</span> name = <span class="str">"Ali"</span>;
<span class="kw">const</span> age = <span class="num">25</span>;

<span class="kw">console</span>.log(name, age);
</code><div class="code-label">Let & Const</div></pre>

      <h2>Arrow Functions</h2>
      <p>Arrow functions waa shorthand functions casri ah.</p>

<pre><code><span class="kw">const</span> add = (a, b) => a + b;

<span class="kw">console</span>.log(<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>));
</code><div class="code-label">Arrow Function</div></pre>

      <h2>Template Literals</h2>
      <p>Template literals waxay kuu ogolaanayaan inaad string ku dhex qorto variables.</p>

<pre><code><span class="kw">let</span> name = <span class="str">"Abdirizak"</span>;

<span class="kw">let</span> message = <span class="str">\`Hello, \${name}!\`</span>;

<span class="kw">console</span>.log(message);
</code><div class="code-label">Template Literals</div></pre>

      <h2>Destructuring</h2>
      <p>Destructuring wuxuu kuu ogolaanayaa inaad values ka soo saarto arrays iyo objects si fudud.</p>

<h3>Array Destructuring</h3>
<pre><code><span class="kw">let</span> colors = [<span class="str">"Red"</span>, <span class="str">"Green"</span>, <span class="str">"Blue"</span>];

<span class="kw">let</span> [a, b] = colors;

<span class="kw">console</span>.log(a);
<span class="kw">console</span>.log(b);
</code><div class="code-label">Array Destructuring</div></pre>

<h3>Object Destructuring</h3>
<pre><code><span class="kw">let</span> user = {
  name: <span class="str">"Ali"</span>,
  age: <span class="num">22</span>
};

<span class="kw">let</span> { name, age } = user;

<span class="kw">console</span>.log(name, age);
</code><div class="code-label">Object Destructuring</div></pre>

      <h2>Spread Operator</h2>
      <p>Spread operator (...) wuxuu kuu ogolaanayaa inaad copy ama combine data.</p>

<pre><code><span class="kw">let</span> arr1 = [<span class="num">1</span>, <span class="num">2</span>];
<span class="kw">let</span> arr2 = [...arr1, <span class="num">3</span>, <span class="num">4</span>];

<span class="kw">console</span>.log(arr2);
</code><div class="code-label">Spread Array</div></pre>

      <h2>Rest Parameters</h2>
      <p>Rest operator wuxuu ururiyaa values badan oo function la siiyo.</p>

<pre><code><span class="kw">function</span> <span class="fn">sum</span>(...numbers) {
  <span class="kw">return</span> numbers.reduce((a, b) => a + b);
}

<span class="kw">console</span>.log(<span class="fn">sum</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));
</code><div class="code-label">Rest Params</div></pre>

      <h2>Default Parameters</h2>
      <p>Waxaad siin kartaa default values functions.</p>

<pre><code><span class="kw">function</span> <span class="fn">greet</span>(name = <span class="str">"Guest"</span>) {
  <span class="kw">console</span>.log(<span class="str">"Hello "</span> + name);
}

<span class="fn">greet</span>();
</code><div class="code-label">Default Params</div></pre>

      <h2>Modules (Import/Export)</h2>
      <p>Modules waxay kuu ogolaanayaan inaad code kala qaybiso files.</p>

<pre><code><span class="cm">// file1.js</span>
<span class="kw">export</span> <span class="kw">const</span> name = <span class="str">"Ali"</span>;

<span class="cm">// file2.js</span>
<span class="kw">import</span> { name } <span class="kw">from</span> <span class="str">"./file1.js"</span>;

<span class="kw">console</span>.log(name);
</code><div class="code-label">Modules</div></pre>

      <h2>Optional Chaining</h2>
      <p>Waxay kaa ilaalisaa errors marka object property maqan yahay.</p>

<pre><code><span class="kw">let</span> user = {};

<span class="kw">console</span>.log(user?.profile?.name);
</code><div class="code-label">Optional Chaining</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> ES6+ features waa essential haddii aad rabto inaad noqoto modern JavaScript developer.
        </div>
      </div>

      <h2>Why ES6+ Matters</h2>
      <p>Waxay ka dhigtaa code-kaaga mid clean, readable, iyo scalable oo ku habboon real-world projects.</p>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>OOP (Object Oriented Programming)</code> iyo classes.
        </div>
      </div>

    </div>
  `
},
{
  title: "Object-Oriented Programming (OOP)",
  subtitle: "Building structured and scalable JavaScript apps",
  readTime: "~10 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 13</div>
      <h1 class="chapter-heading">OOP <em>in JavaScript</em></h1>
      <p class="chapter-lead">OOP (Object-Oriented Programming) waa hab lagu dhiso software adigoo adeegsanaya objects, classes, iyo reusable structure.</p>
    </div>

    <div class="chapter-body">

      <h2>What is OOP?</h2>
      <p>OOP waa programming style ku saleysan objects. Waxay kaa caawisaa inaad code nadiif ah, scalable ah, iyo structured ah qorto.</p>

      <h2>What is a Class?</h2>
      <p>Class waa blueprint lagu sameeyo objects.</p>

<pre><code><span class="kw">class</span> <span class="fn">Person</span> {
  <span class="fn">constructor</span>(name, age) {
    <span class="kw">this</span>.name = name;
    <span class="kw">this</span>.age = age;
  }
}

<span class="kw">let</span> user1 = <span class="kw">new</span> Person(<span class="str">"Ali"</span>, <span class="num">22</span>);

<span class="kw">console</span>.log(user1.name);
</code><div class="code-label">Class Basics</div></pre>

      <h2>Objects from Classes</h2>
      <p>Class-ka waxaad ka abuuri kartaa multiple objects.</p>

<pre><code><span class="kw">let</span> user2 = <span class="kw">new</span> Person(<span class="str">"Ayaan"</span>, <span class="num">20</span>);

<span class="kw">console</span>.log(user2.age);
</code><div class="code-label">Objects</div></pre>

      <h2>Methods in Classes</h2>
      <p>Methods waa functions ku jira class.</p>

<pre><code><span class="kw">class</span> <span class="fn">Person</span> {
  <span class="fn">constructor</span>(name) {
    <span class="kw">this</span>.name = name;
  }

  greet() {
    <span class="kw">console</span>.log(<span class="str">"Hello "</span> + this.name);
  }
}

<span class="kw">let</span> p = <span class="kw">new</span> Person(<span class="str">"Ali"</span>);
p.greet();
</code><div class="code-label">Methods</div></pre>

      <h2>Encapsulation</h2>
      <p>Encapsulation waa in data la qariyo oo lagu xakameeyo gudaha class.</p>

<pre><code><span class="kw">class</span> <span class="fn">BankAccount</span> {
  <span class="fn">constructor</span>(balance) {
    <span class="kw">this</span>._balance = balance;
  }

  getBalance() {
    <span class="kw">return</span> this._balance;
  }
}

<span class="kw">let</span> account = <span class="kw">new</span> BankAccount(<span class="num">1000</span>);
<span class="kw">console</span>.log(account.getBalance());
</code><div class="code-label">Encapsulation</div></pre>

      <h2>Inheritance</h2>
      <p>Inheritance waxay u ogolaanaysaa class inuu dhaxlo properties kale.</p>

<pre><code><span class="kw">class</span> <span class="fn">Animal</span> {
  speak() {
    <span class="kw">console</span>.log(<span class="str">"Animal speaks"</span>);
  }
}

<span class="kw">class</span> <span class="fn">Dog</span> <span class="kw">extends</span> Animal {
  bark() {
    <span class="kw">console</span>.log(<span class="str">"Woof!"</span>);
  }
}

<span class="kw">let</span> d = <span class="kw">new</span> Dog();
d.speak();
d.bark();
</code><div class="code-label">Inheritance</div></pre>

      <h2>Polymorphism</h2>
      <p>Polymorphism waa in method isku mid ah uu si kala duwan u shaqeeyo.</p>

<pre><code><span class="kw">class</span> <span class="fn">Animal</span> {
  speak() {
    <span class="kw">console</span>.log(<span class="str">"Animal sound"</span>);
  }
}

<span class="kw">class</span> <span class="fn">Cat</span> <span class="kw">extends</span> Animal {
  speak() {
    <span class="kw">console</span>.log(<span class="str">"Meow"</span>);
  }
}

<span class="kw">let</span> c = <span class="kw">new</span> Cat();
c.speak();
</code><div class="code-label">Polymorphism</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> OOP waxay kaa caawisaa inaad dhisto large applications sida e-commerce, social media, iyo dashboards.
        </div>
      </div>

      <h2>Why OOP Matters</h2>
      <p>OOP waxay ka dhigtaa code-kaaga mid reusable, scalable, iyo easy to maintain.</p>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Next Chapter:</strong> Chapter-ka xiga waxaad ku baran doontaa <code>Project Practice</code> — mini real-world JavaScript app.
        </div>
      </div>

    </div>
  `
},
{
  title: "Advanced DOM Project",
  subtitle: "Real-world interactive web application",
  readTime: "~10 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 14</div>
      <h1 class="chapter-heading">Advanced <em>DOM Project</em></h1>
      <p class="chapter-lead">Halkan waxaad ku dhisaysaa project dhab ah oo DOM, Events, Arrays, iyo Functions isku daraya.</p>
    </div>

    <div class="chapter-body">

      <h2>Project Idea: Smart Task Manager</h2>
      <p>App-kan wuxuu kuu ogolaanayaa inaad ku darto tasks, tirtirto, search sameyso, iyo mark as completed.</p>

      <h2>HTML Structure</h2>

<pre><code>&lt;input id="taskInput" placeholder="Enter task" /&gt;
&lt;button id="addBtn"&gt;Add Task&lt;/button&gt;

&lt;ul id="taskList"&gt;&lt;/ul&gt;
</code><div class="code-label">HTML</div></pre>

      <h2>Adding Tasks (DOM + Events)</h2>

<pre><code><span class="kw">let</span> input = document.getElementById(<span class="str">"taskInput"</span>);
<span class="kw">let</span> list = document.getElementById(<span class="str">"taskList"</span>);
<span class="kw">let</span> btn = document.getElementById(<span class="str">"addBtn"</span>);

btn.addEventListener(<span class="str">"click"</span>, () => {
  <span class="kw">let</span> task = input.value;

  <span class="kw">if</span> (!task) <span class="kw">return</span>;

  <span class="kw">let</span> li = document.createElement(<span class="str">"li"</span>);
  li.innerText = task;

  list.appendChild(li);
  input.value = <span class="str">""</span>;
});
</code><div class="code-label">Add Task</div></pre>

      <h2>Mark as Completed</h2>

<pre><code>li.addEventListener(<span class="str">"click"</span>, () => {
  li.style.textDecoration = <span class="str">"line-through"</span>;
  li.style.color = <span class="str">"gray"</span>;
});
</code><div class="code-label">Complete Task</div></pre>

      <h2>Delete Task</h2>

<pre><code><span class="kw">let</span> delBtn = document.createElement(<span class="str">"button"</span>);
delBtn.innerText = <span class="str">"Delete"</span>;

delBtn.addEventListener(<span class="str">"click"</span>, () => {
  li.remove();
});

li.appendChild(delBtn);
</code><div class="code-label">Delete Task</div></pre>

      <h2>Search Tasks</h2>

<pre><code><span class="kw">function</span> <span class="fn">searchTask</span>(keyword) {
  <span class="kw">let</span> items = document.querySelectorAll(<span class="str">"li"</span>);

  items.forEach(item => {
    <span class="kw">if</span> (item.innerText.includes(keyword)) {
      item.style.display = <span class="str">"block"</span>;
    } <span class="kw">else</span> {
      item.style.display = <span class="str">"none"</span>;
    }
  });
}
</code><div class="code-label">Search Feature</div></pre>

      <div class="callout">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Tip:</strong> Haddii aad DOM si fiican u fahanto, waxaad dhisi kartaa apps sida Facebook-like UI, dashboards, iyo todo systems.
        </div>
      </div>

      <h2>What You Learned</h2>
      <ul>
        <li>DOM manipulation advanced</li>
        <li>Event handling system</li>
        <li>Dynamic element creation</li>
        <li>Real-world UI logic</li>
      </ul>

      <div class="callout">
        <div class="callout-icon">🚀</div>
        <div class="callout-body">
          <strong>Final Chapter:</strong> Hada waxaad diyaar u tahay dhisto projects dhab ah , 😊👌
        </div>
      </div>

    </div>
  `
},
{
  title: "Final 😍 ",
  subtitle: "Projects, Tips & Your Developer Identity",
  readTime: "~10 min",
  content: `
    <div class="chapter-hero">
      <div class="chapter-number">Chapter 15</div>
      <h1 class="chapter-heading">Final <em> Isbarasho 😍</em></h1>
      <p class="chapter-lead"> .</p>
    </div>

    <div class="chapter-body">

      <h2>👤 About Me (Developer Profile)</h2>

      <div class="callout">
        <div class="callout-icon">👤</div>
        <div class="callout-body">
          <strong>Name:</strong> Abdirizak sheikh Siyaad<br/>
          <strong>Role:</strong> JavaScript Developer (Beginner → Intermediate)<br/>
          <strong>Focus:</strong> Web Development, DOM, APIs, Projects<br/>
          <strong>Status:</strong> Learning & Building Real Projects 
   

      
            <div class="callout-body">
          <strong>📍Location:</strong> <br> Jijiga, Ethiopia<br/>
      

          <strong>🔗Contact:</strong> <br>
          <a href="https://github.com/abdurizak2030" target="_blank">GitHub Profile</a><br/>
          <a href="https://www.facebook.com/abdirizak.sheikh.ziyad" target="_blank">Facebook Profile</a><br/>
          <a href="https://tiktok.com/@cabdirizak.3" target="_blank">TikTok Profile</a><br/>
          <a href="abdurizak2030@gmail.com">Email </a>
          
        </div>

        </div>
        <div class="callout-icon"></div>
        <div class="callout-body">
          <img width="200" max-width="200px" src="photo_2026-05-12_16-51-39.jpg" alt="Your Photo" class="developer-photo">
        </div>
      
    </div>
    <h2>Dhamaad 😎 </h2>
    

       

    
  `
},
];
 let currentChapter = 0;

function renderSidebar() {
  const list = document.getElementById('chapterList');
  list.innerHTML = chapters.map((ch, i) => `
    <div class="chapter-item ${i === currentChapter ? 'active' : ''}" onclick="goToChapter(${i})">
      <span class="ch-num">${String(i+1).padStart(2,'0')}</span>
      <span class="ch-title">${ch.title}</span>
    </div>
  `).join('');
}

function renderContent() {
  const wrap = document.getElementById('contentWrap');
  const ch = chapters[currentChapter];

  const prevDisabled = currentChapter === 0 ? 'disabled' : '';
  const nextDisabled = currentChapter === chapters.length - 1 ? 'disabled' : '';
  const prevTitle = currentChapter > 0 ? chapters[currentChapter - 1].title : '';
  const nextTitle = currentChapter < chapters.length - 1 ? chapters[currentChapter + 1].title : '';

  const nav = `
    <nav class="chapter-nav">
      <button class="nav-btn prev ${prevDisabled}" onclick="goToChapter(${currentChapter - 1})" ${prevDisabled ? 'disabled' : ''}>
        <span class="nav-arrow">←</span>
        <div>
          <div class="nav-label">Previous</div>
          <div class="nav-title">${prevTitle || '—'}</div>
        </div>
      </button>
      <button class="nav-btn next ${nextDisabled}" onclick="goToChapter(${currentChapter + 1})" ${nextDisabled ? 'disabled' : ''}>
        <div>
          <div class="nav-label">Next</div>
          <div class="nav-title">${nextTitle || '—'}</div>
        </div>
        <span class="nav-arrow">→</span>
      </button>
    </nav>`;

  wrap.innerHTML = `<div class="chapter-content active">${ch.content}${nav}</div>`;
  wrap.scrollTop = 0;
  document.getElementById('readingTime').textContent = ch.readTime;
  document.getElementById('chBreadcrumb').textContent = String(currentChapter + 1).padStart(2, '0');
  updateProgress();
  renderSidebar();
  window.scrollTo({ top: 0 });
}

function goToChapter(idx) {
  if (idx < 0 || idx >= chapters.length) return;
  currentChapter = idx;
  renderContent();
  if (window.innerWidth <= 900) closeSidebar();
}

function updateProgress() {
  const pct = ((currentChapter + 1) / chapters.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}

// Scroll progress
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById('scrollFill').style.width = pct + '%';
});

// Dark/light theme
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '☽' : '☀';
});

// Sidebar toggle (mobile)
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
  hamburger.classList.add('open');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  hamburger.classList.remove('open');
}
hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
overlay.addEventListener('click', closeSidebar);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToChapter(currentChapter + 1);
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goToChapter(currentChapter - 1);
});

// Init
renderContent();
