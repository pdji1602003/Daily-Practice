//Before create the app
Vue.config.devtools = true;


Vue.component('product', {
	props:{
		premium:{
			type:Boolean,
			required:true
		}
	},
	template: `
	<div class="product">
		<div class="product-image">
			<img :src="image" alt="A pair of green socks">
		</div>
		<div class="product-info">
			<h1>{{product}}</h1>
			<p v-if="inStock > 0">In Stock</p>
			<p v-else :class="{outOfStock:!inStock}">Out of Stock</p>
			<p>User is premiun: {{premium}}</p>
			<p>Shipping:{{shipping}}</p>
			<ul>
				<li v-for="detail of details">{{detail}}</li>
			</ul>
			<div 
			v-for="(variant, index) in variants" 
			:key="variant.variantId" 
			class="color-box" 
			:style="{backgroundColor:variant.variantColor}"
			@mouseover="updateProduct(index)">
			</div>
			<button 
			v-on:click="addToCart" 
			:disabled="!inStock"
			:class="{disabledButton: !inStock}"
			>Add to Cart</button>
			<button @click="removeFromCart">Undo</button>
			<div class="cart">
				<p>Cart {{cart}}</p>
			</div>
		</div>
	</div>
	`,
	data() {
		return {
			product: 'Socks',
			brand: 'Vue Mastery',
			selectedVariant: 0,
			// image: './img/vmSocks-green-onWhite.jpg',
			// inStock: 0,
			details: ['80% cotton', '20% polyester', 'Gender-neutral'],
			//同一種物件，會擁有同樣的特性，特性值卻不盡相同，這時候就要想到使用object去做你data的container
			variants: [
				{
					variantId: 2234,
					variantColor: 'green',
					variantImage: './img/vmSocks-green-onWhite.jpg',
					variantQuantity: 10
				},
				{
					variantId: 2235,
					variantColor: 'blue',
					variantImage: './img/vmSocks-blue-onWhite.jpg',
					variantQuantity: 0
				}
			],
			cart: 0
		}
	},
	methods: {
		addToCart: function () {
			/* 加與不加return似乎不會造成差異 
			但這讓我聯想到js constructor也無需清楚寫明return，或許跟那也有關係？*/
			this.cart += 1;
		},
		removeFromCart: function () {
			this.cart -= 1;
		},
		updateProduct(index) {
			this.selectedVariant = index
			console.log(index)
		}
	},
	computed: {
		title() {
			return this.brand + '' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		}
	}
})



let app = new Vue({
	el: '#app',
	data:{
		premium:true
	}
})