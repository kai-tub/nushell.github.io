import{_ as i,M as l,p as r,q as d,Q as e,t as a,N as s,U as n,a1 as o}from"./framework-344bb0e4.js";const c={},h=o(`<h1 id="variables-and-subexpressions" tabindex="-1"><a class="header-anchor" href="#variables-and-subexpressions" aria-hidden="true">#</a> Variables and Subexpressions</h1><p>There are two types of evaluation expressions in Nushell: variables and subexpressions. You know that you&#39;re looking at an evaluation expression because it begins with a dollar sign (<code>$</code>). This indicates that when Nushell gets the value in this position, it will need to run an evaluation step to process the expression and then use the resulting value. Both evaluation expression forms support a simple form and a &#39;path&#39; form for working with more complex data.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>The simpler of the two evaluation expressions is the variable. During evaluation, a variable is replaced by its value. After creating a variable, we can refer to it using <code>$</code> followed by its name.</p><h3 id="types-of-variables" tabindex="-1"><a class="header-anchor" href="#types-of-variables" aria-hidden="true">#</a> Types of Variables</h3><h4 id="immutable-variables" tabindex="-1"><a class="header-anchor" href="#immutable-variables" aria-hidden="true">#</a> Immutable Variables</h4><p>An immutable variable cannot change its value after declaration. They are declared using the <code>let</code> keyword,</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let val = 42
&gt; print $val
42
</code></pre></div><p>However, they can be &#39;shadowed&#39;. Shadowing means that they are redeclared and their initial value cannot be used anymore within the same scope.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let val = 42                   # declare a variable
&gt; do { let val = 101;  $val }    # in an inner scope, shadow the variable
101
&gt; $val                           # in the outer scope the variable remains unchanged
42
</code></pre></div><h4 id="mutable-variables" tabindex="-1"><a class="header-anchor" href="#mutable-variables" aria-hidden="true">#</a> Mutable Variables</h4><p>A mutable variable is allowed to change its value by assignment. These are declared using the <code>mut</code> keyword.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; mut val = 42 
&gt; $val += 27
&gt; $val
69
</code></pre></div><p>There are a couple of assignment operators used with mutable variables</p><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td><code>=</code></td><td>Assigns a new value to the variable</td></tr><tr><td><code>+=</code></td><td>Adds a value to the variable and makes the sum its new value</td></tr><tr><td><code>-=</code></td><td>Subtracts a value from the variable and makes the difference its new value</td></tr><tr><td><code>*=</code></td><td>Multiplies the variable by a value and makes the product its new value</td></tr><tr><td><code>/=</code></td><td>Divides the variable by a value and makes the quotient its new value</td></tr><tr><td><code>**=</code></td><td>Concatenates the variable with a list making the new list its new value</td></tr></tbody></table><blockquote><p><strong>Note</strong></p><ol><li><code>+=</code>, <code>-=</code>, <code>*=</code> and <code>/=</code> are only valid in the contexts where their root operations are expected to work. For example, <code>+=</code> uses addition, so it can not be used for contexts where addition would normally fail</li><li><code>**=</code> requires a variable representing a list <strong>and</strong> a list argument</li></ol></blockquote><h6 id="more-on-mutability" tabindex="-1"><a class="header-anchor" href="#more-on-mutability" aria-hidden="true">#</a> More on Mutability</h6><p>Closures and nested <code>def</code>s cannot capture mutable variables from their environment. For example</p><div class="language-text" data-ext="text"><pre class="language-text"><code># naive method to count number of elements in a list
mut x = 0

[1 2 3] | each { $x += 1 }   # error: $x is captured in a closure
</code></pre></div><p>To use mutable variables for such behaviour, you are encouraged to use the loops</p><h4 id="constant-variables" tabindex="-1"><a class="header-anchor" href="#constant-variables" aria-hidden="true">#</a> Constant Variables</h4>`,21),u=e("code",null,"source",-1),p=e("code",null,"use",-1),g=e("code",null,"register",-1),b=e("code",null,"const",-1),m=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>const plugin = &#39;path/to/plugin&#39;
register $plugin
</code></pre></div><h3 id="variable-names" tabindex="-1"><a class="header-anchor" href="#variable-names" aria-hidden="true">#</a> Variable Names</h3><p>Variable names in nushell come with a few restrictions as to what characters they can contain. In particular, they cannot contain these characters</p><div class="language-text" data-ext="text"><pre class="language-text"><code>.  [  (  {  +  -  *  ^  /  =  !  &lt;  &gt;  &amp;  |
</code></pre></div><p>It is common for some scripts to declare variables that start with <code>$</code>. This is allowed.</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>&gt; let $var = 42
# identical to \`let var = 42\`
</code></pre></div><h3 id="variable-values" tabindex="-1"><a class="header-anchor" href="#variable-values" aria-hidden="true">#</a> Variable Values</h3><p>A common issue that users run into is trying to declare a variable using a pipeline as the value like so:</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let val = 42 | math sin
</code></pre></div><p>This is an error, because the pipe command is used to separate pipeline elements, so nushell will see this as a pipeline with two elements, one of which is not allowed in pipelines because it doesn&#39;t return a value (<code>let val = 42</code>). The correct way to declare using a pipeline is to wrap the pipeline in parentheses</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>let val = (42 | math sin)
</code></pre></div><h3 id="variable-paths" tabindex="-1"><a class="header-anchor" href="#variable-paths" aria-hidden="true">#</a> Variable Paths</h3><p>A variable path works by reaching inside of the contents of a variable, navigating columns inside of it, to reach a final value. Let&#39;s say instead of <code>4</code>, we had assigned a table value:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let my_value = [[name]; [testuser]]
</code></pre></div><p>We can use a variable path to evaluate the variable <code>$my_value</code> and get the value from the <code>name</code> column in a single step:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $my_value.name.0
testuser
</code></pre></div><p>Sometimes, we don&#39;t really know the contents of a variable. Accessing values as shown above can result to errors if the path used does not exist. To more robustly handle this, we can use the question mark operator to return <code>null</code> incase the path does not exist, instead of an error, then we would write custom logic to handle the <code>null</code></p><p>For example, here, if row <code>0</code> does not exist on <code>name</code>, then <code>null</code> is returned. Without the question mark operator, an error would have been raised instead</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>&gt; let files = (ls)
&gt; $files.name.0?
</code></pre></div><p>The question mark operator can be used to &#39;guard&#39; any path</p><div class="language-nu" data-ext="nu"><pre class="language-nu"><code>&gt; let files = (ls)
&gt; $files.name?.0?
</code></pre></div><h2 id="subexpressions" tabindex="-1"><a class="header-anchor" href="#subexpressions" aria-hidden="true">#</a> Subexpressions</h2><p>You can always evaluate a subexpression and use its result by wrapping the expression with parentheses <code>()</code>. Note that previous versions of Nushell (prior to 0.32) used <code>$()</code>.</p>`,23),v=e("code",null,"(ls)",-1),x=e("code",null,"ls",-1),w=e("code",null,"(git branch --show-current)",-1),f=e("code",null,"(2 + 3)",-1),_=o(`<p>Subexpressions can also be pipelines and not just single commands. If we wanted to get a list of filenames larger than ten kilobytes, we can use an subexpression to run a pipeline and assign the result to a variable:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let names_of_big_files = (ls | where size &gt; 10kb)
&gt; $names_of_big_files
───┬────────────┬──────┬──────────┬──────────────
 # │    name    │ type │   size   │   modified
───┼────────────┼──────┼──────────┼──────────────
 0 │ Cargo.lock │ File │ 155.3 KB │ 17 hours ago
 1 │ README.md  │ File │  15.9 KB │ 17 hours ago
───┴────────────┴──────┴──────────┴──────────────
</code></pre></div><h2 id="subexpressions-and-paths" tabindex="-1"><a class="header-anchor" href="#subexpressions-and-paths" aria-hidden="true">#</a> Subexpressions and paths</h2><p>Subexpressions also support paths. For example, let&#39;s say we wanted to get a list of the filenames in the current directory. One way to do this is to use a pipeline:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>We can do a very similar action in a single step using a subexpression path:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; (ls).name
</code></pre></div><p>It depends on the needs of the code and your particular style which form works best for you.</p><h2 id="short-hand-subexpressions-row-conditions" tabindex="-1"><a class="header-anchor" href="#short-hand-subexpressions-row-conditions" aria-hidden="true">#</a> Short-hand subexpressions (row conditions)</h2>`,9),y=e("code",null,"ls",-1),k=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where size > 10kb
`)])],-1),$=e("code",null,"where size > 10kb",-1),T=e("code",null,"where",-1),V=e("code",null,"size > 10kb",-1),z=e("code",null,"size",-1),N=e("code",null,"$it.size",-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where $it.size > 10kb
> ls | where ($it.size > 10kb)
> ls | where {|$x| $x.size > 10kb }
`)])],-1),A=e("p",null,[a("For short-hand syntax to work, the column name must appear on the left-hand side of the operation (like "),e("code",null,"size"),a(" in "),e("code",null,"size > 10kb"),a(").")],-1);function q(F,B){const t=l("RouterLink");return r(),d("div",null,[h,e("p",null,[a("A constant variable is an immutable variable that can be fully evaluated at parse-time. These are useful with commands that need to know the value of an argument at parse time, like "),s(t,{to:"/commands/docs/source.html"},{default:n(()=>[u]),_:1}),a(", "),s(t,{to:"/commands/docs/use.html"},{default:n(()=>[p]),_:1}),a(" and "),s(t,{to:"/commands/docs/register.html"},{default:n(()=>[g]),_:1}),a(". See "),s(t,{to:"/book/how_nushell_code_gets_run.html"},{default:n(()=>[a("how nushell code gets run")]),_:1}),a(" for a deeper explanation. They are declared using the "),b,a(" keyword")]),m,e("p",null,[a("The parentheses contain a pipeline that will run to completion, and the resulting value will then be used. For example, "),v,a(" would run the "),s(t,{to:"/commands/docs/ls.html"},{default:n(()=>[x]),_:1}),a(" command and give back the resulting table and "),w,a(" runs the external git command and returns a string with the name of the current branch. You can also use parentheses to run math expressions like "),f,a(".")]),_,e("p",null,[a("Nushell supports accessing columns in a subexpression using a simple short-hand. You may have already used this functionality before. If, for example, we wanted to only see rows from "),s(t,{to:"/commands/docs/ls.html"},{default:n(()=>[y]),_:1}),a(" where the entry is at least ten kilobytes we can write:")]),k,e("p",null,[a("The "),$,a(" is a command with two parts: the command name "),s(t,{to:"/commands/docs/where.html"},{default:n(()=>[T]),_:1}),a(" and the short-hand expression "),V,a(". We say short-hand because "),z,a(" here is the shortened version of writing "),N,a(". This could also be written in any of the following ways:")]),S,A])}const I=i(c,[["render",q],["__file","variables_and_subexpressions.html.vue"]]);export{I as default};
