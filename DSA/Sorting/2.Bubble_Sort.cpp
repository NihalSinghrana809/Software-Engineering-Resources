#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
void bubble_sort(vector<int>&arr){
      for(int i=0;i<arr.size();i++){
            for(int j=0;j<arr.size();j++){
                  if(arr[j]>arr[j+1]){
                        swap(arr[j],arr[j+1]);
                  }
            }
      }
}
int main(){
      int n;
      cin>>n;
      vector<int>arr(n);
      for(int i=0;i<n;i++){
            cin>>arr[i];
      }
      bubble_sort(arr);
      for(int i=0;i<n;i++){
            cout<<arr[i]<<" ";
      }
      return 0;
}