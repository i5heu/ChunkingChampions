! WORK IN PROGRESS !

# ChunkingChampions

<p align="center">
  <img src=".media/logo.png"  width="33%">
</p>


## Overview
Welcome to `ChunkingChampions` – the definitive benchmarking arena for data chunking algorithms. This repository serves as a competitive platform to identify and compare the most efficient and effective chunking strategies. Our primary goal is to discover the best algorithm capable of creating chunks of approximately 1KB, 100KB, and 100MB, optimized for use in deduplication processes.

## Objective
The core mission of `ChunkingChampions` is to rigorously test and benchmark a variety of chunking algorithms under uniform conditions. We aim to determine which algorithm demonstrates superior performance in creating chunks of specific sizes, particularly 1KB, 100KB, and 100MB. These chunk sizes have been selected due to their common applicability in deduplication scenarios, ranging from small-scale to large-scale data processing.

## Why Chunking?
Chunking is a fundamental process in data deduplication, impacting both the efficiency and effectiveness of data storage and retrieval. The choice of chunking algorithm can significantly influence the deduplication ratio and overall system performance. Therefore, finding the most suitable algorithm for different chunk sizes is crucial in optimizing data storage solutions.

## How to Participate with Your Algorithm

If you have developed a chunking algorithm that you believe excels in creating 1KB, 100KB, or 100MB chunks, we invite you to participate in the `ChunkingChampions` challenge. To submit your algorithm, please follow these steps:

1. **Prepare Your Code**: Ensure your algorithm is implemented in Go. Place your source code in a dedicated folder within the `participants/` directory of this repository. Name this folder with a unique and descriptive title for your algorithm, such as `MyChunkingAlgorithm/`.

2. **Include a `info.json` File**: In your algorithm's folder, include a `info.json` file containing metadata about your algorithm. This should include the algorithm's name, a brief description, the author's name, and any other relevant information.

3. **Direct Business Logic Requirement**: It's crucial that the core logic of your chunking algorithm is contained directly within your source code. While you may use external packages for auxiliary functions, the essential chunking logic must be self-contained. This ensures that the code remains easily accessible and understandable for benchmarking and review purposes.

4. **Submit a Pull Request (PR)**: Once your code and `info.json` are ready, submit a Pull Request to the `ChunkingChampions` repository. Your PR should target the `participants/` directory with your algorithm's folder.

Our community will review your submission, and upon approval, your algorithm will be included in the benchmarking tests. This is a great opportunity to showcase your work, contribute to the field of data chunking, and potentially become one of the `ChunkingChampions`.

Remember, the goal here is not only to find the most efficient algorithms but also to foster an environment of open collaboration and innovation. We look forward to seeing your unique approaches to chunking!

## Benchmarking Process
The benchmarks are conducted in a controlled environment to ensure fairness and accuracy. Each algorithm is tested for its ability to create chunks of 1KB, 100KB, and 100MB, with a focus on the efficiency, reliability, and deduplication-friendliness of the chunks created. We use a diverse range of datasets to simulate real-world scenarios and ensure comprehensive testing.

## Results and Discussions
All benchmark results will be documented and shared in this repository. We aim to foster an open and collaborative discussion on the findings, enabling the community to understand the strengths and weaknesses of each algorithm. 

Join us in our quest to crown the champions of chunking algorithms and push the boundaries of data deduplication technology!
