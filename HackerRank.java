import java.util.ArrayList;

public class HackerRank {

    public static void main(String[] args) {
        staircase(10);
//        int[][] arr = {
//        {1, 2, 3},
//        {4, 5, 6,},
//        {9, 8, 9}
//            };
//
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr[i].length; j+= 2) {
//                System.out.println(arr[i][j]);
//
//            }
//        }
    }

        public static void staircase ( int n){
            String stairs = "";
            for (int i = 0; i < n; i++) {
                stairs += "#";
                System.out.printf("%" + n + "s\n", stairs);
            }

        }

    }
