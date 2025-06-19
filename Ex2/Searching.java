package ECommerce_Exercise;

class Product {
	String productID;
	String productName;
	String category;
	
	public Product(String pi,String pn,String c) {
		this.productID=pi;
		this.productName=pn;
		this.category=c;
	}	
}
class List{
	public Product[] productList(int n) {
		Product[] p_list = new Product[5];
		p_list[0] = new Product("WLE01","WireLess EarPhones","Electronic");
		p_list[1]= new Product("MON03", "27-inch Monitor", "Electronic");
		p_list[2]= new Product("MOU07", "Wireless Mouse", "Accessories");
		p_list[3]= new Product("KEY10", "Mechanical Keyboard", "Accessories");
		p_list[4]= new Product("CHA13", "Ergo Chair", "Furniture");
		return p_list;
	}
}
public class Searching{
	public static void main(String[] args) {
		List ls = new List();
		Product[] arr = ls.productList(5);
		
		//Linear Search
		System.out.println(linearSearch(arr,"CHA13"));
		// Binary Search
		//array is already in sorted form
		System.out.println(binarySearch(arr,"KEY9"));
	}
	static boolean linearSearch(Product[] arr,String product_id_to_be_searched){
		for(Product product: arr) {
			if(product.productID.equals(product_id_to_be_searched)) {
				return true;
			}
		}
		return false;
	}
	static boolean binarySearch(Product[] arr,String product_id_to_be_searched) {
		int start =0,end = arr.length-1;
		while(start<=end) {
			int mid = start+(end-start)/2;
			if(arr[mid].productID.equals(product_id_to_be_searched)) {
				return true;
			}
			else if(arr[mid].productID.compareTo(product_id_to_be_searched)>0) {
				end = mid-1;
			}else {
				start=mid+1;
			}
		}
		return false;
	}
}
