const c = { a: { a: "aaa", b: "bbbb" }, b: "bbbb" };
// >

console.log(c);
// { a: { a: 'aaa', b: 'bbbb' }, b: 'bbbb' }

const d = c;

c.b = "eee";

c.a.a = "eee";

console.log(c);
// { a: { a: 'eee', b: 'bbbb' }, b: 'eee' }

console.log(d);
// { a: { a: 'eee', b: 'bbbb' }, b: 'eee' }

const e = { ...c };

e;
// { a: { a: 'eee', b: 'bbbb' }, b: 'eee' }

c.a.a = "ccc";

c;
// { a: { a: 'ccc', b: 'bbbb' }, b: 'eee' }

e;
// { a: { a: 'ccc', b: 'bbbb' }, b: 'eee' }

const f = { ...c, a: { ...c.a } };

c.a.a = "assasa";

f;
// { a: { a: 'ccc', b: 'bbbb' }, b: 'eee' }

c;
// { a: { a: 'assasa', b: 'bbbb' }, b: 'eee' }

const g = JSON.parse(JSON.stringify(c));

g;
// { a: { a: 'assasa', b: 'bbbb' }, b: 'eee' }

c.a.a = "ccc";

c;
// { a: { a: 'ccc', b: 'bbbb' }, b: 'eee' }

g;
// { a: { a: 'assasa', b: 'bbbb' }, b: 'eee' }
