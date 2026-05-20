#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
void insertion_sort(vector<int>&arr){
      for(int i=1;i<arr.size();i++){
            int key=arr[i];
            int j=i-1;
            // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
            while(j>=0 && arr[j]>key){
                  arr[j+1]=arr[j];
                  j--;
            }
            // Place the key in its correct position in the sorted subarray
            arr[j+1]=key;
      }
}
int main(){
      int n;
      cin>>n;
      vector<int>arr(n);
      for(int i=0;i<n;i++){
            cin>>arr[i];
      }
      insertion_sort(arr);
      for(int i=0;i<n;i++){
            cout<<arr[i]<<" ";
      }
      return 0;
}