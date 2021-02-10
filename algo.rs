fn main () {
    println!("Hello world");
    let result = parking_d(vec![4,1,3,7], 2);
    println!("Result: {:?}", result);
}

fn parking_d (mut cars: Vec<i32>, k: usize) -> i32 {
    cars.sort();
    let mut arr: Vec<&[i32]> = Vec::new();
    let len: usize = cars.len();
    let mut start: usize = 0;
    while k + start < len + 1 {
        arr.push(&cars[start..(k+start)]);
        start += 1;
    }
    println!("{:?}", arr);
    let result = arr.iter()
        .map(|&x| x[x.len() - 1] + 1 - x[0])
        .collect::<Vec<i32>>();
    result.iter().min().unwrap().to_owned()  
}