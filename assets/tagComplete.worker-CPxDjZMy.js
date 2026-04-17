(function() {
	const Vt = "ENTRIES", ut = "KEYS", lt = "VALUES";
	var R = class {
		constructor(n, t) {
			const e = n._tree, r = Array.from(e.keys());
			this.set = n, this._type = t, this._path = r.length > 0 ? [{
				node: e,
				keys: r
			}] : [];
		}
		next() {
			const n = this.dive();
			return this.backtrack(), n;
		}
		dive() {
			if (this._path.length === 0) return {
				done: !0,
				value: void 0
			};
			const { node: n, keys: t } = x(this._path);
			if (x(t) === "") return {
				done: !1,
				value: this.result()
			};
			const e = n.get(x(t));
			return this._path.push({
				node: e,
				keys: Array.from(e.keys())
			}), this.dive();
		}
		backtrack() {
			if (this._path.length === 0) return;
			const n = x(this._path).keys;
			n.pop(), !(n.length > 0) && (this._path.pop(), this.backtrack());
		}
		key() {
			return this.set._prefix + this._path.map(({ keys: n }) => x(n)).filter((n) => n !== "").join("");
		}
		value() {
			return x(this._path).node.get("");
		}
		result() {
			switch (this._type) {
				case lt: return this.value();
				case ut: return this.key();
				default: return [this.key(), this.value()];
			}
		}
		[Symbol.iterator]() {
			return this;
		}
	};
	const x = (n) => n[n.length - 1], jt = (n, t, e) => {
		const r = /* @__PURE__ */ new Map();
		if (t === void 0) return r;
		const i = t.length + 1, o = i + e, s = new Uint8Array(o * i).fill(e + 1);
		for (let c = 0; c < i; ++c) s[c] = c;
		for (let c = 1; c < o; ++c) s[c * i] = c;
		return ht(n, t, e, r, s, 1, i, ""), r;
	}, ht = (n, t, e, r, i, o, s, c) => {
		const u = o * s;
		t: for (const l of n.keys()) if (l === "") {
			const a = i[u - 1];
			a <= e && r.set(c, [n.get(l), a]);
		} else {
			let a = o;
			for (let h = 0; h < l.length; ++h, ++a) {
				const d = l[h], f = s * a, p = f - s;
				let g = i[f];
				const m = Math.max(0, a - e - 1), _ = Math.min(s - 1, a + e);
				for (let v = m; v < _; ++v) {
					const ct = d !== t[v], at = i[p + v] + +ct, P = i[p + v + 1] + 1, E = i[f + v] + 1, F = i[f + v + 1] = Math.min(at, P, E);
					F < g && (g = F);
				}
				if (g > e) continue t;
			}
			ht(n.get(l), t, e, r, i, a, s, c + l);
		}
	};
	var N = class z {
		constructor(t = /* @__PURE__ */ new Map(), e = "") {
			this._size = void 0, this._tree = t, this._prefix = e;
		}
		atPrefix(t) {
			if (!t.startsWith(this._prefix)) throw new Error("Mismatched prefix");
			const [e, r] = T(this._tree, t.slice(this._prefix.length));
			if (e === void 0) {
				const [i, o] = J(r);
				for (const s of i.keys()) if (s !== "" && s.startsWith(o)) {
					const c = /* @__PURE__ */ new Map();
					return c.set(s.slice(o.length), i.get(s)), new z(c, t);
				}
			}
			return new z(e, t);
		}
		clear() {
			this._size = void 0, this._tree.clear();
		}
		delete(t) {
			return this._size = void 0, Pt(this._tree, t);
		}
		entries() {
			return new R(this, Vt);
		}
		forEach(t) {
			for (const [e, r] of this) t(e, r, this);
		}
		fuzzyGet(t, e) {
			return jt(this._tree, t, e);
		}
		get(t) {
			const e = U(this._tree, t);
			return e !== void 0 ? e.get("") : void 0;
		}
		has(t) {
			const e = U(this._tree, t);
			return e !== void 0 && e.has("");
		}
		keys() {
			return new R(this, ut);
		}
		set(t, e) {
			if (typeof t != "string") throw new Error("key must be a string");
			return this._size = void 0, W(this._tree, t).set("", e), this;
		}
		get size() {
			if (this._size) return this._size;
			this._size = 0;
			const t = this.entries();
			for (; !t.next().done;) this._size += 1;
			return this._size;
		}
		update(t, e) {
			if (typeof t != "string") throw new Error("key must be a string");
			this._size = void 0;
			const r = W(this._tree, t);
			return r.set("", e(r.get(""))), this;
		}
		fetch(t, e) {
			if (typeof t != "string") throw new Error("key must be a string");
			this._size = void 0;
			const r = W(this._tree, t);
			let i = r.get("");
			return i === void 0 && r.set("", i = e()), i;
		}
		values() {
			return new R(this, lt);
		}
		[Symbol.iterator]() {
			return this.entries();
		}
		static from(t) {
			const e = new z();
			for (const [r, i] of t) e.set(r, i);
			return e;
		}
		static fromObject(t) {
			return z.from(Object.entries(t));
		}
	};
	const T = (n, t, e = []) => {
		if (t.length === 0 || n == null) return [n, e];
		for (const r of n.keys()) if (r !== "" && t.startsWith(r)) return e.push([n, r]), T(n.get(r), t.slice(r.length), e);
		return e.push([n, t]), T(void 0, "", e);
	}, U = (n, t) => {
		if (t.length === 0 || n == null) return n;
		for (const e of n.keys()) if (e !== "" && t.startsWith(e)) return U(n.get(e), t.slice(e.length));
	}, W = (n, t) => {
		const e = t.length;
		t: for (let r = 0; n && r < e;) {
			for (const o of n.keys()) if (o !== "" && t[r] === o[0]) {
				const s = Math.min(e - r, o.length);
				let c = 1;
				for (; c < s && t[r + c] === o[c];) ++c;
				const u = n.get(o);
				if (c === o.length) n = u;
				else {
					const l = /* @__PURE__ */ new Map();
					l.set(o.slice(c), u), n.set(t.slice(r, r + c), l), n.delete(o), n = l;
				}
				r += c;
				continue t;
			}
			const i = /* @__PURE__ */ new Map();
			return n.set(t.slice(r), i), i;
		}
		return n;
	}, Pt = (n, t) => {
		const [e, r] = T(n, t);
		if (e !== void 0) {
			if (e.delete(""), e.size === 0) dt(r);
			else if (e.size === 1) {
				const [i, o] = e.entries().next().value;
				ft(r, i, o);
			}
		}
	}, dt = (n) => {
		if (n.length === 0) return;
		const [t, e] = J(n);
		if (t.delete(e), t.size === 0) dt(n.slice(0, -1));
		else if (t.size === 1) {
			const [r, i] = t.entries().next().value;
			r !== "" && ft(n.slice(0, -1), r, i);
		}
	}, ft = (n, t, e) => {
		if (n.length === 0) return;
		const [r, i] = J(n);
		r.set(i + t, e), r.delete(i);
	}, J = (n) => n[n.length - 1], $ = "or", pt = "and", Dt = "and_not";
	var B = class D {
		constructor(t) {
			if (t?.fields == null) throw new Error("MiniSearch: option \"fields\" must be provided");
			const e = t.autoVacuum == null || t.autoVacuum === !0 ? G : t.autoVacuum;
			this._options = {
				...Y,
				...t,
				autoVacuum: e,
				searchOptions: {
					...mt,
					...t.searchOptions || {}
				},
				autoSuggestOptions: {
					...Jt,
					...t.autoSuggestOptions || {}
				}
			}, this._index = new N(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldIds = {}, this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = /* @__PURE__ */ new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = q, this.addFields(this._options.fields);
		}
		add(t) {
			const { extractField: e, stringifyField: r, tokenize: i, processTerm: o, fields: s, idField: c } = this._options, u = e(t, c);
			if (u == null) throw new Error(`MiniSearch: document does not have ID field "${c}"`);
			if (this._idToShortId.has(u)) throw new Error(`MiniSearch: duplicate ID ${u}`);
			const l = this.addDocumentId(u);
			this.saveStoredFields(l, t);
			for (const a of s) {
				const h = e(t, a);
				if (h == null) continue;
				const d = i(r(h, a), a), f = this._fieldIds[a], p = new Set(d).size;
				this.addFieldLength(l, f, this._documentCount - 1, p);
				for (const g of d) {
					const m = o(g, a);
					if (Array.isArray(m)) for (const _ of m) this.addTerm(f, l, _);
					else m && this.addTerm(f, l, m);
				}
			}
		}
		addAll(t) {
			for (const e of t) this.add(e);
		}
		addAllAsync(t, e = {}) {
			const { chunkSize: r = 10 } = e, i = {
				chunk: [],
				promise: Promise.resolve()
			}, { chunk: o, promise: s } = t.reduce(({ chunk: c, promise: u }, l, a) => (c.push(l), (a + 1) % r === 0 ? {
				chunk: [],
				promise: u.then(() => new Promise((h) => setTimeout(h, 0))).then(() => this.addAll(c))
			} : {
				chunk: c,
				promise: u
			}), i);
			return s.then(() => this.addAll(o));
		}
		remove(t) {
			const { tokenize: e, processTerm: r, extractField: i, stringifyField: o, fields: s, idField: c } = this._options, u = i(t, c);
			if (u == null) throw new Error(`MiniSearch: document does not have ID field "${c}"`);
			const l = this._idToShortId.get(u);
			if (l == null) throw new Error(`MiniSearch: cannot remove document with ID ${u}: it is not in the index`);
			for (const a of s) {
				const h = i(t, a);
				if (h == null) continue;
				const d = e(o(h, a), a), f = this._fieldIds[a], p = new Set(d).size;
				this.removeFieldLength(l, f, this._documentCount, p);
				for (const g of d) {
					const m = r(g, a);
					if (Array.isArray(m)) for (const _ of m) this.removeTerm(f, l, _);
					else m && this.removeTerm(f, l, m);
				}
			}
			this._storedFields.delete(l), this._documentIds.delete(l), this._idToShortId.delete(u), this._fieldLength.delete(l), this._documentCount -= 1;
		}
		removeAll(t) {
			if (t) for (const e of t) this.remove(e);
			else {
				if (arguments.length > 0) throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
				this._index = new N(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._storedFields = /* @__PURE__ */ new Map(), this._nextId = 0;
			}
		}
		discard(t) {
			const e = this._idToShortId.get(t);
			if (e == null) throw new Error(`MiniSearch: cannot discard document with ID ${t}: it is not in the index`);
			this._idToShortId.delete(t), this._documentIds.delete(e), this._storedFields.delete(e), (this._fieldLength.get(e) || []).forEach((r, i) => {
				this.removeFieldLength(e, i, this._documentCount, r);
			}), this._fieldLength.delete(e), this._documentCount -= 1, this._dirtCount += 1, this.maybeAutoVacuum();
		}
		maybeAutoVacuum() {
			if (this._options.autoVacuum === !1) return;
			const { minDirtFactor: t, minDirtCount: e, batchSize: r, batchWait: i } = this._options.autoVacuum;
			this.conditionalVacuum({
				batchSize: r,
				batchWait: i
			}, {
				minDirtCount: e,
				minDirtFactor: t
			});
		}
		discardAll(t) {
			const e = this._options.autoVacuum;
			try {
				this._options.autoVacuum = !1;
				for (const r of t) this.discard(r);
			} finally {
				this._options.autoVacuum = e;
			}
			this.maybeAutoVacuum();
		}
		replace(t) {
			const { idField: e, extractField: r } = this._options, i = r(t, e);
			this.discard(i), this.add(t);
		}
		vacuum(t = {}) {
			return this.conditionalVacuum(t);
		}
		conditionalVacuum(t, e) {
			return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && e, this._enqueuedVacuum != null ? this._enqueuedVacuum : (this._enqueuedVacuum = this._currentVacuum.then(() => {
				const r = this._enqueuedVacuumConditions;
				return this._enqueuedVacuumConditions = q, this.performVacuuming(t, r);
			}), this._enqueuedVacuum)) : this.vacuumConditionsMet(e) === !1 ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(t), this._currentVacuum);
		}
		async performVacuuming(t, e) {
			const r = this._dirtCount;
			if (this.vacuumConditionsMet(e)) {
				const i = t.batchSize || H.batchSize, o = t.batchWait || H.batchWait;
				let s = 1;
				for (const [c, u] of this._index) {
					for (const [l, a] of u) for (const [h] of a) this._documentIds.has(h) || (a.size <= 1 ? u.delete(l) : a.delete(h));
					this._index.get(c).size === 0 && this._index.delete(c), s % i === 0 && await new Promise((l) => setTimeout(l, o)), s += 1;
				}
				this._dirtCount -= r;
			}
			await null, this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null;
		}
		vacuumConditionsMet(t) {
			if (t == null) return !0;
			let { minDirtCount: e, minDirtFactor: r } = t;
			return e = e || G.minDirtCount, r = r || G.minDirtFactor, this.dirtCount >= e && this.dirtFactor >= r;
		}
		get isVacuuming() {
			return this._currentVacuum != null;
		}
		get dirtCount() {
			return this._dirtCount;
		}
		get dirtFactor() {
			return this._dirtCount / (1 + this._documentCount + this._dirtCount);
		}
		has(t) {
			return this._idToShortId.has(t);
		}
		getStoredFields(t) {
			const e = this._idToShortId.get(t);
			if (e != null) return this._storedFields.get(e);
		}
		search(t, e = {}) {
			const { searchOptions: r } = this._options, i = {
				...r,
				...e
			}, o = this.executeQuery(t, e), s = [];
			for (const [c, { score: u, terms: l, match: a }] of o) {
				const h = l.length || 1, d = {
					id: this._documentIds.get(c),
					score: u * h,
					terms: Object.keys(a),
					queryTerms: l,
					match: a
				};
				Object.assign(d, this._storedFields.get(c)), (i.filter == null || i.filter(d)) && s.push(d);
			}
			return t === D.wildcard && i.boostDocument == null || s.sort(_t), s;
		}
		autoSuggest(t, e = {}) {
			e = {
				...this._options.autoSuggestOptions,
				...e
			};
			const r = /* @__PURE__ */ new Map();
			for (const { score: o, terms: s } of this.search(t, e)) {
				const c = s.join(" "), u = r.get(c);
				u != null ? (u.score += o, u.count += 1) : r.set(c, {
					score: o,
					terms: s,
					count: 1
				});
			}
			const i = [];
			for (const [o, { score: s, terms: c, count: u }] of r) i.push({
				suggestion: o,
				terms: c,
				score: s / u
			});
			return i.sort(_t), i;
		}
		get documentCount() {
			return this._documentCount;
		}
		get termCount() {
			return this._index.size;
		}
		static loadJSON(t, e) {
			if (e == null) throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
			return this.loadJS(JSON.parse(t), e);
		}
		static async loadJSONAsync(t, e) {
			if (e == null) throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
			return this.loadJSAsync(JSON.parse(t), e);
		}
		static getDefault(t) {
			if (Y.hasOwnProperty(t)) return Q(Y, t);
			throw new Error(`MiniSearch: unknown option "${t}"`);
		}
		static loadJS(t, e) {
			const { index: r, documentIds: i, fieldLength: o, storedFields: s, serializationVersion: c } = t, u = this.instantiateMiniSearch(t, e);
			u._documentIds = O(i), u._fieldLength = O(o), u._storedFields = O(s);
			for (const [l, a] of u._documentIds) u._idToShortId.set(a, l);
			for (const [l, a] of r) {
				const h = /* @__PURE__ */ new Map();
				for (const d of Object.keys(a)) {
					let f = a[d];
					c === 1 && (f = f.ds), h.set(parseInt(d, 10), O(f));
				}
				u._index.set(l, h);
			}
			return u;
		}
		static async loadJSAsync(t, e) {
			const { index: r, documentIds: i, fieldLength: o, storedFields: s, serializationVersion: c } = t, u = this.instantiateMiniSearch(t, e);
			u._documentIds = await M(i), u._fieldLength = await M(o), u._storedFields = await M(s);
			for (const [a, h] of u._documentIds) u._idToShortId.set(h, a);
			let l = 0;
			for (const [a, h] of r) {
				const d = /* @__PURE__ */ new Map();
				for (const f of Object.keys(h)) {
					let p = h[f];
					c === 1 && (p = p.ds), d.set(parseInt(f, 10), await M(p));
				}
				++l % 1e3 === 0 && await yt(0), u._index.set(a, d);
			}
			return u;
		}
		static instantiateMiniSearch(t, e) {
			const { documentCount: r, nextId: i, fieldIds: o, averageFieldLength: s, dirtCount: c, serializationVersion: u } = t;
			if (u !== 1 && u !== 2) throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
			const l = new D(e);
			return l._documentCount = r, l._nextId = i, l._idToShortId = /* @__PURE__ */ new Map(), l._fieldIds = o, l._avgFieldLength = s, l._dirtCount = c || 0, l._index = new N(), l;
		}
		executeQuery(t, e = {}) {
			if (t === D.wildcard) return this.executeWildcardQuery(e);
			if (typeof t != "string") {
				const a = {
					...e,
					...t,
					queries: void 0
				}, h = t.queries.map((d) => this.executeQuery(d, a));
				return this.combineResults(h, a.combineWith);
			}
			const { tokenize: r, processTerm: i, searchOptions: o } = this._options, s = {
				tokenize: r,
				processTerm: i,
				...o,
				...e
			}, { tokenize: c, processTerm: u } = s, l = c(t).flatMap((a) => u(a)).filter((a) => !!a).map(Wt(s)).map((a) => this.executeQuerySpec(a, s));
			return this.combineResults(l, s.combineWith);
		}
		executeQuerySpec(t, e) {
			const r = {
				...this._options.searchOptions,
				...e
			}, i = (r.fields || this._options.fields).reduce((g, m) => ({
				...g,
				[m]: Q(r.boost, m) || 1
			}), {}), { boostDocument: o, weights: s, maxFuzzy: c, bm25: u } = r, { fuzzy: l, prefix: a } = {
				...mt.weights,
				...s
			}, h = this._index.get(t.term), d = this.termResults(t.term, t.term, 1, t.termBoost, h, i, o, u);
			let f, p;
			if (t.prefix && (f = this._index.atPrefix(t.term)), t.fuzzy) {
				const g = t.fuzzy === !0 ? .2 : t.fuzzy, m = g < 1 ? Math.min(c, Math.round(t.term.length * g)) : g;
				m && (p = this._index.fuzzyGet(t.term, m));
			}
			if (f) for (const [g, m] of f) {
				const _ = g.length - t.term.length;
				if (!_) continue;
				p?.delete(g);
				const v = a * g.length / (g.length + .3 * _);
				this.termResults(t.term, g, v, t.termBoost, m, i, o, u, d);
			}
			if (p) for (const g of p.keys()) {
				const [m, _] = p.get(g);
				if (!_) continue;
				const v = l * g.length / (g.length + _);
				this.termResults(t.term, g, v, t.termBoost, m, i, o, u, d);
			}
			return d;
		}
		executeWildcardQuery(t) {
			const e = /* @__PURE__ */ new Map(), r = {
				...this._options.searchOptions,
				...t
			};
			for (const [i, o] of this._documentIds) {
				const s = r.boostDocument ? r.boostDocument(o, "", this._storedFields.get(i)) : 1;
				e.set(i, {
					score: s,
					terms: [],
					match: {}
				});
			}
			return e;
		}
		combineResults(t, e = $) {
			if (t.length === 0) return /* @__PURE__ */ new Map();
			const r = Rt[e.toLowerCase()];
			if (!r) throw new Error(`Invalid combination operator: ${e}`);
			return t.reduce(r) || /* @__PURE__ */ new Map();
		}
		toJSON() {
			const t = [];
			for (const [e, r] of this._index) {
				const i = {};
				for (const [o, s] of r) i[o] = Object.fromEntries(s);
				t.push([e, i]);
			}
			return {
				documentCount: this._documentCount,
				nextId: this._nextId,
				documentIds: Object.fromEntries(this._documentIds),
				fieldIds: this._fieldIds,
				fieldLength: Object.fromEntries(this._fieldLength),
				averageFieldLength: this._avgFieldLength,
				storedFields: Object.fromEntries(this._storedFields),
				dirtCount: this._dirtCount,
				index: t,
				serializationVersion: 2
			};
		}
		termResults(t, e, r, i, o, s, c, u, l = /* @__PURE__ */ new Map()) {
			if (o == null) return l;
			for (const a of Object.keys(s)) {
				const h = s[a], d = this._fieldIds[a], f = o.get(d);
				if (f == null) continue;
				let p = f.size;
				const g = this._avgFieldLength[d];
				for (const m of f.keys()) {
					if (!this._documentIds.has(m)) {
						this.removeTerm(d, m, e), p -= 1;
						continue;
					}
					const _ = c ? c(this._documentIds.get(m), e, this._storedFields.get(m)) : 1;
					if (!_) continue;
					const v = f.get(m), ct = this._fieldLength.get(m)[d], at = Ut(v, p, this._documentCount, ct, g, u), P = r * i * h * _ * at, E = l.get(m);
					if (E) {
						E.score += P, $t(E.terms, t);
						const F = Q(E.match, e);
						F ? F.push(a) : E.match[e] = [a];
					} else l.set(m, {
						score: P,
						terms: [t],
						match: { [e]: [a] }
					});
				}
			}
			return l;
		}
		addTerm(t, e, r) {
			const i = this._index.fetch(r, vt);
			let o = i.get(t);
			if (o == null) o = /* @__PURE__ */ new Map(), o.set(e, 1), i.set(t, o);
			else {
				const s = o.get(e);
				o.set(e, (s || 0) + 1);
			}
		}
		removeTerm(t, e, r) {
			if (!this._index.has(r)) {
				this.warnDocumentChanged(e, t, r);
				return;
			}
			const i = this._index.fetch(r, vt), o = i.get(t);
			o == null || o.get(e) == null ? this.warnDocumentChanged(e, t, r) : o.get(e) <= 1 ? o.size <= 1 ? i.delete(t) : o.delete(e) : o.set(e, o.get(e) - 1), this._index.get(r).size === 0 && this._index.delete(r);
		}
		warnDocumentChanged(t, e, r) {
			for (const i of Object.keys(this._fieldIds)) if (this._fieldIds[i] === e) {
				this._options.logger("warn", `MiniSearch: document with ID ${this._documentIds.get(t)} has changed before removal: term "${r}" was not present in field "${i}". Removing a document after it has changed can corrupt the index!`, "version_conflict");
				return;
			}
		}
		addDocumentId(t) {
			const e = this._nextId;
			return this._idToShortId.set(t, e), this._documentIds.set(e, t), this._documentCount += 1, this._nextId += 1, e;
		}
		addFields(t) {
			for (let e = 0; e < t.length; e++) this._fieldIds[t[e]] = e;
		}
		addFieldLength(t, e, r, i) {
			let o = this._fieldLength.get(t);
			o == null && this._fieldLength.set(t, o = []), o[e] = i;
			const s = (this._avgFieldLength[e] || 0) * r + i;
			this._avgFieldLength[e] = s / (r + 1);
		}
		removeFieldLength(t, e, r, i) {
			if (r === 1) {
				this._avgFieldLength[e] = 0;
				return;
			}
			const o = this._avgFieldLength[e] * r - i;
			this._avgFieldLength[e] = o / (r - 1);
		}
		saveStoredFields(t, e) {
			const { storeFields: r, extractField: i } = this._options;
			if (r == null || r.length === 0) return;
			let o = this._storedFields.get(t);
			o == null && this._storedFields.set(t, o = {});
			for (const s of r) {
				const c = i(e, s);
				c !== void 0 && (o[s] = c);
			}
		}
	};
	B.wildcard = Symbol("*");
	const Q = (n, t) => Object.prototype.hasOwnProperty.call(n, t) ? n[t] : void 0, Rt = {
		[$]: (n, t) => {
			for (const e of t.keys()) {
				const r = n.get(e);
				if (r == null) n.set(e, t.get(e));
				else {
					const { score: i, terms: o, match: s } = t.get(e);
					r.score = r.score + i, r.match = Object.assign(r.match, s), gt(r.terms, o);
				}
			}
			return n;
		},
		[pt]: (n, t) => {
			const e = /* @__PURE__ */ new Map();
			for (const r of t.keys()) {
				const i = n.get(r);
				if (i == null) continue;
				const { score: o, terms: s, match: c } = t.get(r);
				gt(i.terms, s), e.set(r, {
					score: i.score + o,
					terms: i.terms,
					match: Object.assign(i.match, c)
				});
			}
			return e;
		},
		[Dt]: (n, t) => {
			for (const e of t.keys()) n.delete(e);
			return n;
		}
	}, Nt = {
		k: 1.2,
		b: .7,
		d: .5
	}, Ut = (n, t, e, r, i, o) => {
		const { k: s, b: c, d: u } = o;
		return Math.log(1 + (e - t + .5) / (t + .5)) * (u + n * (s + 1) / (n + s * (1 - c + c * r / i)));
	}, Wt = (n) => (t, e, r) => ({
		term: t,
		fuzzy: typeof n.fuzzy == "function" ? n.fuzzy(t, e, r) : n.fuzzy || !1,
		prefix: typeof n.prefix == "function" ? n.prefix(t, e, r) : n.prefix === !0,
		termBoost: typeof n.boostTerm == "function" ? n.boostTerm(t, e, r) : 1
	}), Y = {
		idField: "id",
		extractField: (n, t) => n[t],
		stringifyField: (n, t) => n.toString(),
		tokenize: (n) => n.split(Bt),
		processTerm: (n) => n.toLowerCase(),
		fields: void 0,
		searchOptions: void 0,
		storeFields: [],
		logger: (n, t) => {
			typeof console?.[n] == "function" && console[n](t);
		},
		autoVacuum: !0
	}, mt = {
		combineWith: $,
		prefix: !1,
		fuzzy: !1,
		maxFuzzy: 6,
		boost: {},
		weights: {
			fuzzy: .45,
			prefix: .375
		},
		bm25: Nt
	}, Jt = {
		combineWith: pt,
		prefix: (n, t, e) => t === e.length - 1
	}, H = {
		batchSize: 1e3,
		batchWait: 10
	}, q = {
		minDirtFactor: .1,
		minDirtCount: 20
	}, G = {
		...H,
		...q
	}, $t = (n, t) => {
		n.includes(t) || n.push(t);
	}, gt = (n, t) => {
		for (const e of t) n.includes(e) || n.push(e);
	}, _t = ({ score: n }, { score: t }) => t - n, vt = () => /* @__PURE__ */ new Map(), O = (n) => {
		const t = /* @__PURE__ */ new Map();
		for (const e of Object.keys(n)) t.set(parseInt(e, 10), n[e]);
		return t;
	}, M = async (n) => {
		const t = /* @__PURE__ */ new Map();
		let e = 0;
		for (const r of Object.keys(n)) t.set(parseInt(r, 10), n[r]), ++e % 1e3 === 0 && await yt(0);
		return t;
	}, yt = (n) => new Promise((t) => setTimeout(t, n)), Bt = /[\n\r\p{Z}\p{P}]+/u;
	var K = function(n, t) {
		return K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
			e.__proto__ = r;
		} || function(e, r) {
			for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
		}, K(n, t);
	};
	function I(n, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
		K(n, t);
		function e() {
			this.constructor = n;
		}
		n.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
	}
	function Z(n) {
		var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], r = 0;
		if (e) return e.call(n);
		if (n && typeof n.length == "number") return { next: function() {
			return n && r >= n.length && (n = void 0), {
				value: n && n[r++],
				done: !n
			};
		} };
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function A(n, t) {
		var e = typeof Symbol == "function" && n[Symbol.iterator];
		if (!e) return n;
		var r = e.call(n), i, o = [], s;
		try {
			for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value);
		} catch (c) {
			s = { error: c };
		} finally {
			try {
				i && !i.done && (e = r.return) && e.call(r);
			} finally {
				if (s) throw s.error;
			}
		}
		return o;
	}
	function C(n, t, e) {
		if (e || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++) (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
		return n.concat(o || Array.prototype.slice.call(t));
	}
	function y(n) {
		return typeof n == "function";
	}
	function bt(n) {
		var t = function(r) {
			Error.call(r), r.stack = (/* @__PURE__ */ new Error()).stack;
		}, e = n(t);
		return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
	}
	var X = bt(function(n) {
		return function(e) {
			n(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, i) {
				return i + 1 + ") " + r.toString();
			}).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
		};
	});
	function tt(n, t) {
		if (n) {
			var e = n.indexOf(t);
			0 <= e && n.splice(e, 1);
		}
	}
	var L = (function() {
		function n(t) {
			this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
		}
		return n.prototype.unsubscribe = function() {
			var t, e, r, i, o;
			if (!this.closed) {
				this.closed = !0;
				var s = this._parentage;
				if (s) if (this._parentage = null, Array.isArray(s)) try {
					for (var c = Z(s), u = c.next(); !u.done; u = c.next()) u.value.remove(this);
				} catch (p) {
					t = { error: p };
				} finally {
					try {
						u && !u.done && (e = c.return) && e.call(c);
					} finally {
						if (t) throw t.error;
					}
				}
				else s.remove(this);
				var l = this.initialTeardown;
				if (y(l)) try {
					l();
				} catch (p) {
					o = p instanceof X ? p.errors : [p];
				}
				var a = this._finalizers;
				if (a) {
					this._finalizers = null;
					try {
						for (var h = Z(a), d = h.next(); !d.done; d = h.next()) {
							var f = d.value;
							try {
								Et(f);
							} catch (p) {
								o = o ?? [], p instanceof X ? o = C(C([], A(o)), A(p.errors)) : o.push(p);
							}
						}
					} catch (p) {
						r = { error: p };
					} finally {
						try {
							d && !d.done && (i = h.return) && i.call(h);
						} finally {
							if (r) throw r.error;
						}
					}
				}
				if (o) throw new X(o);
			}
		}, n.prototype.add = function(t) {
			var e;
			if (t && t !== this) if (this.closed) Et(t);
			else {
				if (t instanceof n) {
					if (t.closed || t._hasParent(this)) return;
					t._addParent(this);
				}
				(this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
			}
		}, n.prototype._hasParent = function(t) {
			var e = this._parentage;
			return e === t || Array.isArray(e) && e.includes(t);
		}, n.prototype._addParent = function(t) {
			var e = this._parentage;
			this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
		}, n.prototype._removeParent = function(t) {
			var e = this._parentage;
			e === t ? this._parentage = null : Array.isArray(e) && tt(e, t);
		}, n.prototype.remove = function(t) {
			var e = this._finalizers;
			e && tt(e, t), t instanceof n && t._removeParent(this);
		}, n.EMPTY = (function() {
			var t = new n();
			return t.closed = !0, t;
		})(), n;
	})(), wt = L.EMPTY;
	function St(n) {
		return n instanceof L || n && "closed" in n && y(n.remove) && y(n.add) && y(n.unsubscribe);
	}
	function Et(n) {
		y(n) ? n() : n.unsubscribe();
	}
	var b = {
		onUnhandledError: null,
		onStoppedNotification: null,
		Promise: void 0,
		useDeprecatedSynchronousErrorHandling: !1,
		useDeprecatedNextContext: !1
	}, k = {
		setTimeout: function(n, t) {
			for (var e = [], r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
			var i = k.delegate;
			return i?.setTimeout ? i.setTimeout.apply(i, C([n, t], A(e))) : setTimeout.apply(void 0, C([n, t], A(e)));
		},
		clearTimeout: function(n) {
			return (k.delegate?.clearTimeout || clearTimeout)(n);
		},
		delegate: void 0
	};
	function Qt(n) {
		k.setTimeout(function() {
			var t = b.onUnhandledError;
			if (t) t(n);
			else throw n;
		});
	}
	function xt() {}
	var Yt = (function() {
		return et("C", void 0, void 0);
	})();
	function Ht(n) {
		return et("E", void 0, n);
	}
	function qt(n) {
		return et("N", n, void 0);
	}
	function et(n, t, e) {
		return {
			kind: n,
			value: t,
			error: e
		};
	}
	var w = null;
	function V(n) {
		if (b.useDeprecatedSynchronousErrorHandling) {
			var t = !w;
			if (t && (w = {
				errorThrown: !1,
				error: null
			}), n(), t) {
				var e = w, r = e.errorThrown, i = e.error;
				if (w = null, r) throw i;
			}
		} else n();
	}
	function Gt(n) {
		b.useDeprecatedSynchronousErrorHandling && w && (w.errorThrown = !0, w.error = n);
	}
	var It = (function(n) {
		I(t, n);
		function t(e) {
			var r = n.call(this) || this;
			return r.isStopped = !1, e ? (r.destination = e, St(e) && e.add(r)) : r.destination = te, r;
		}
		return t.create = function(e, r, i) {
			return new nt(e, r, i);
		}, t.prototype.next = function(e) {
			this.isStopped ? it(qt(e), this) : this._next(e);
		}, t.prototype.error = function(e) {
			this.isStopped ? it(Ht(e), this) : (this.isStopped = !0, this._error(e));
		}, t.prototype.complete = function() {
			this.isStopped ? it(Yt, this) : (this.isStopped = !0, this._complete());
		}, t.prototype.unsubscribe = function() {
			this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null);
		}, t.prototype._next = function(e) {
			this.destination.next(e);
		}, t.prototype._error = function(e) {
			try {
				this.destination.error(e);
			} finally {
				this.unsubscribe();
			}
		}, t.prototype._complete = function() {
			try {
				this.destination.complete();
			} finally {
				this.unsubscribe();
			}
		}, t;
	})(L), Kt = Function.prototype.bind;
	function rt(n, t) {
		return Kt.call(n, t);
	}
	var Zt = (function() {
		function n(t) {
			this.partialObserver = t;
		}
		return n.prototype.next = function(t) {
			var e = this.partialObserver;
			if (e.next) try {
				e.next(t);
			} catch (r) {
				j(r);
			}
		}, n.prototype.error = function(t) {
			var e = this.partialObserver;
			if (e.error) try {
				e.error(t);
			} catch (r) {
				j(r);
			}
			else j(t);
		}, n.prototype.complete = function() {
			var t = this.partialObserver;
			if (t.complete) try {
				t.complete();
			} catch (e) {
				j(e);
			}
		}, n;
	})(), nt = (function(n) {
		I(t, n);
		function t(e, r, i) {
			var o = n.call(this) || this, s;
			if (y(e) || !e) s = {
				next: e ?? void 0,
				error: r ?? void 0,
				complete: i ?? void 0
			};
			else {
				var c;
				o && b.useDeprecatedNextContext ? (c = Object.create(e), c.unsubscribe = function() {
					return o.unsubscribe();
				}, s = {
					next: e.next && rt(e.next, c),
					error: e.error && rt(e.error, c),
					complete: e.complete && rt(e.complete, c)
				}) : s = e;
			}
			return o.destination = new Zt(s), o;
		}
		return t;
	})(It);
	function j(n) {
		b.useDeprecatedSynchronousErrorHandling ? Gt(n) : Qt(n);
	}
	function Xt(n) {
		throw n;
	}
	function it(n, t) {
		var e = b.onStoppedNotification;
		e && k.setTimeout(function() {
			return e(n, t);
		});
	}
	var te = {
		closed: !0,
		next: xt,
		error: Xt,
		complete: xt
	}, ee = (function() {
		return typeof Symbol == "function" && Symbol.observable || "@@observable";
	})();
	function re(n) {
		return n;
	}
	function ne(n) {
		return n.length === 0 ? re : n.length === 1 ? n[0] : function(e) {
			return n.reduce(function(r, i) {
				return i(r);
			}, e);
		};
	}
	var Ft = (function() {
		function n(t) {
			t && (this._subscribe = t);
		}
		return n.prototype.lift = function(t) {
			var e = new n();
			return e.source = this, e.operator = t, e;
		}, n.prototype.subscribe = function(t, e, r) {
			var i = this, o = oe(t) ? t : new nt(t, e, r);
			return V(function() {
				var s = i, c = s.operator, u = s.source;
				o.add(c ? c.call(o, u) : u ? i._subscribe(o) : i._trySubscribe(o));
			}), o;
		}, n.prototype._trySubscribe = function(t) {
			try {
				return this._subscribe(t);
			} catch (e) {
				t.error(e);
			}
		}, n.prototype.forEach = function(t, e) {
			var r = this;
			return e = zt(e), new e(function(i, o) {
				var s = new nt({
					next: function(c) {
						try {
							t(c);
						} catch (u) {
							o(u), s.unsubscribe();
						}
					},
					error: o,
					complete: i
				});
				r.subscribe(s);
			});
		}, n.prototype._subscribe = function(t) {
			var e;
			return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t);
		}, n.prototype[ee] = function() {
			return this;
		}, n.prototype.pipe = function() {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
			return ne(t)(this);
		}, n.prototype.toPromise = function(t) {
			var e = this;
			return t = zt(t), new t(function(r, i) {
				var o;
				e.subscribe(function(s) {
					return o = s;
				}, function(s) {
					return i(s);
				}, function() {
					return r(o);
				});
			});
		}, n.create = function(t) {
			return new n(t);
		}, n;
	})();
	function zt(n) {
		var t;
		return (t = n ?? b.Promise) !== null && t !== void 0 ? t : Promise;
	}
	function ie(n) {
		return n && y(n.next) && y(n.error) && y(n.complete);
	}
	function oe(n) {
		return n && n instanceof It || ie(n) && St(n);
	}
	var se = bt(function(n) {
		return function() {
			n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
		};
	}), Tt = (function(n) {
		I(t, n);
		function t() {
			var e = n.call(this) || this;
			return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e;
		}
		return t.prototype.lift = function(e) {
			var r = new Ot(this, this);
			return r.operator = e, r;
		}, t.prototype._throwIfClosed = function() {
			if (this.closed) throw new se();
		}, t.prototype.next = function(e) {
			var r = this;
			V(function() {
				var i, o;
				if (r._throwIfClosed(), !r.isStopped) {
					r.currentObservers || (r.currentObservers = Array.from(r.observers));
					try {
						for (var s = Z(r.currentObservers), c = s.next(); !c.done; c = s.next()) c.value.next(e);
					} catch (u) {
						i = { error: u };
					} finally {
						try {
							c && !c.done && (o = s.return) && o.call(s);
						} finally {
							if (i) throw i.error;
						}
					}
				}
			});
		}, t.prototype.error = function(e) {
			var r = this;
			V(function() {
				if (r._throwIfClosed(), !r.isStopped) {
					r.hasError = r.isStopped = !0, r.thrownError = e;
					for (var i = r.observers; i.length;) i.shift().error(e);
				}
			});
		}, t.prototype.complete = function() {
			var e = this;
			V(function() {
				if (e._throwIfClosed(), !e.isStopped) {
					e.isStopped = !0;
					for (var r = e.observers; r.length;) r.shift().complete();
				}
			});
		}, t.prototype.unsubscribe = function() {
			this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
		}, Object.defineProperty(t.prototype, "observed", {
			get: function() {
				var e;
				return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0;
			},
			enumerable: !1,
			configurable: !0
		}), t.prototype._trySubscribe = function(e) {
			return this._throwIfClosed(), n.prototype._trySubscribe.call(this, e);
		}, t.prototype._subscribe = function(e) {
			return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
		}, t.prototype._innerSubscribe = function(e) {
			var r = this, i = this, o = i.hasError, s = i.isStopped, c = i.observers;
			return o || s ? wt : (this.currentObservers = null, c.push(e), new L(function() {
				r.currentObservers = null, tt(c, e);
			}));
		}, t.prototype._checkFinalizedStatuses = function(e) {
			var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
			i ? e.error(o) : s && e.complete();
		}, t.prototype.asObservable = function() {
			var e = new Ft();
			return e.source = this, e;
		}, t.create = function(e, r) {
			return new Ot(e, r);
		}, t;
	})(Ft), Ot = (function(n) {
		I(t, n);
		function t(e, r) {
			var i = n.call(this) || this;
			return i.destination = e, i.source = r, i;
		}
		return t.prototype.next = function(e) {
			var r, i;
			(i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, e);
		}, t.prototype.error = function(e) {
			var r, i;
			(i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, e);
		}, t.prototype.complete = function() {
			var e, r;
			(r = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || r === void 0 || r.call(e);
		}, t.prototype._subscribe = function(e) {
			var r, i;
			return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e)) !== null && i !== void 0 ? i : wt;
		}, t;
	})(Tt), ce = (function(n) {
		I(t, n);
		function t(e) {
			var r = n.call(this) || this;
			return r._value = e, r;
		}
		return Object.defineProperty(t.prototype, "value", {
			get: function() {
				return this.getValue();
			},
			enumerable: !1,
			configurable: !0
		}), t.prototype._subscribe = function(e) {
			var r = n.prototype._subscribe.call(this, e);
			return !r.closed && e.next(this._value), r;
		}, t.prototype.getValue = function() {
			var e = this, r = e.hasError, i = e.thrownError, o = e._value;
			if (r) throw i;
			return this._throwIfClosed(), o;
		}, t.prototype.next = function(e) {
			n.prototype.next.call(this, this._value = e);
		}, t;
	})(Tt);
	function ae(n, t) {
		let e, r = !1;
		return new ReadableStream({
			async start(i) {
				const o = e = n.getReader();
				let s = 0;
				for (;;) {
					const { done: c, value: u } = await o.read();
					if (c) {
						if (r) return;
						i.close();
						return;
					}
					u && (s += u.length, t(s), i.enqueue(u));
				}
			},
			cancel(i) {
				return r = !0, e.cancel(i);
			}
		});
	}
	function ue(n) {
		let t, e = !1;
		return new ReadableStream({
			async start(r) {
				const i = t = n.getReader(), o = new TextDecoder();
				let s = "";
				for (;;) {
					const { done: c, value: u } = await i.read();
					if (c) {
						if (e) return;
						if (s.trim().length > 0) try {
							r.enqueue(JSON.parse(s));
						} catch (a) {
							r.error(a);
							return;
						}
						r.close();
						return;
					}
					s += o.decode(u, { stream: !0 });
					const l = s.split(`
`);
					for (let a = 0; a < l.length - 1; a++) {
						const h = l[a].trim();
						if (h.length > 0) try {
							r.enqueue(JSON.parse(h));
						} catch (d) {
							r.error(d), e = !0, i.cancel();
							return;
						}
					}
					s = l[l.length - 1];
				}
			},
			cancel(r) {
				return e = !0, t.cancel(r);
			}
		});
	}
	async function le(n, t, e) {
		const r = await fetch(n);
		if (!r.body) throw new Error("Tag completion data is empty");
		e?.(.15);
		const i = new B(t), o = +(r.headers.get("content-length") || r.headers.get("x-amz-meta-content-length") || Infinity), s = ue(ae(r.body, (c) => o && e?.(.15 + c / o * .85))).getReader();
		for (;;) {
			const { done: c, value: u } = await s.read();
			if (c) break;
			i.add(u);
		}
		return e?.(1), i;
	}
	async function he(n) {
		if (!S) throw new Error("Tag search is not initialized");
		const t = await fetch(n);
		if (!t.body) throw new Error("Related tag data is empty");
		const e = await t.arrayBuffer(), r = /* @__PURE__ */ new Map(), i = new Uint32Array(e), o = i.length;
		let s = 0;
		for (; s < o;) {
			const c = i[s++], u = i[s++], l = [];
			for (let h = 0; h < u; h++) {
				const d = i[s++], f = S.getStoredFields(d);
				f && l.push(f.name);
			}
			const a = S.getStoredFields(c);
			a && r.set(a.name, l);
		}
		return r;
	}
	async function de() {
		return new B({
			fields: ["character", "world"],
			storeFields: [
				"character",
				"world",
				"characterId",
				"media"
			]
		});
	}
	const Mt = new ce(0), At = de();
	let ot = !1, Ct, S, Lt, st;
	const kt = (n) => {
		Mt.subscribe((t) => {
			n.postMessage({
				type: "progress",
				progress: t
			});
		}), n.onmessage = async function(t) {
			const e = t.data;
			switch (e.type) {
				case "init": {
					const { assets: r } = e.payload;
					if (ot) return;
					if (ot = !0, r?.tags && Ct !== JSON.stringify(r.tags)) for (const i of r.tags.jsonl) try {
						S = await le(i, {
							fields: ["name", "words"],
							storeFields: ["name", "post_count"]
						}, (o) => Mt.next(o)), Ct = JSON.stringify(r.tags);
						break;
					} catch (o) {
						console.error(o);
						continue;
					}
					if (S && r?.relatedTag && Lt !== JSON.stringify(r.relatedTag)) for (const i of r.relatedTag.bin) try {
						st = await he(i), Lt = JSON.stringify(r.relatedTag);
						break;
					} catch (o) {
						console.error(o);
						continue;
					}
					ot = !1;
					return;
				}
				case "completion": {
					const { query: r, prefix: i, requestId: o } = e.payload, s = void 0, c = (a) => n.postMessage({
						type: "completion",
						query: r,
						completions: a,
						time: s,
						requestId: o
					});
					if (!S) return c([]);
					if (!r && i && st) {
						const a = i.match(/(?:[\s\S]*[,[\]]\s*)?([^,[\]]*?)[,[\]]\s*$/)?.[1]?.replace(/ /g, "_");
						if (a) {
							const h = st.get(a);
							if (h) return c([h.map((d) => d.replace(/_/g, " ")).filter((d) => !i.includes(d)).join(", ")].filter(Boolean).map((d) => ({ label: d })));
						}
					}
					if (!r) return c([]);
					const u = (await At).search(r, {
						prefix: !0,
						fuzzy: .1
					}).filter((a, h) => h < 3).map((a) => ({
						characterId: a.characterId,
						label: `${a.character} (${a.world})`,
						media: a.media
					})), l = S.search(r, {
						combineWith: "AND",
						prefix: !0,
						fuzzy: .1
					});
					for (const a of l) a.score = a.post_count * a.score ** 2;
					return c([...u, ...l.sort((a, h) => h.score - a.score).slice(0, 7).map((a) => ({
						id: a.id,
						label: a.name.replace(/_/g, " "),
						post_count: a.post_count
					}))]);
				}
				case "updateCharacters": {
					const r = await At;
					r.removeAll();
					const { characters: i } = e.payload;
					r.addAll(i.map((o) => ({
						...o,
						id: o.characterId
					})));
					break;
				}
			}
		};
	};
	self.onconnect = (n) => {
		const [t] = n.ports;
		kt(t);
	}, "SharedWorkerGlobalScope" in self || kt(self);
})();

//# sourceMappingURL=tagComplete.worker-CPxDjZMy.js.map