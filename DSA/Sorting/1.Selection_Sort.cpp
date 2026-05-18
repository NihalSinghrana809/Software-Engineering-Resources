#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
void selection_sort(vector<int>&arr){
      for(int i=0;i<arr.size()-1;i++){
            // Asssume the minimum element is the first element of the unsorted array
            int min_index=i;
            for(int j=i+1;j<arr.size();j++){
                  if(arr[j]<arr[min_index]){
                        min_index=j;
                  }
            }
            swap(arr[i],arr[min_index]);
      }
}
int main(){
      int n;
      cin>>n;
      vector<int>arr(n);
      for(int i=0;i<n;i++){
            cin>>arr[i];
      }
      selection_sort(arr);
      for(int i=0;i<n;i++){
            cout<<arr[i]<<" ";
      }
      return 0;
}