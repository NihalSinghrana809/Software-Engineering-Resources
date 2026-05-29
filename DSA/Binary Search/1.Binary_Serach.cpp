#include<iostream>
using namespace std;
int binarySearch(int arr[],int size,int key){
    int start=0;
    int end=size-1;
    while(start<=end){
        int mid=start+(end-start)/2;
        if(arr[mid]==key){
            return mid;
        }
        else if(arr[mid]>key){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}
int main(){
      int n;
      cin>>n;
      int arr[n];
      for(int i=0;i<n;i++){
          cin>>arr[i];
      }
      int key;
      cin>>key;
      int result=binarySearch(arr,n,key);
      if(result==-1){
          cout<<"Element not found"<<endl;
      }
      else{
          cout<<"Element found at index "<<result<<endl;
      }
      return 0;
}
