#define STB_IMAGE_IMPLEMENTATION
#define STB_IMAGE_RESIZE_IMPLEMENTATION
#define STB_IMAGE_WRITE_IMPLEMENTATION
#include "ThirdParty/stb/stb_image.h"
#include "ThirdParty/stb/stb_image_resize2.h"
#include "ThirdParty/stb/stb_image_write.h"
#include <string>
#include <filesystem>

namespace fs = std::filesystem;

int main(int argc, char** argv)
{
	if (argc < 4)
	{
		printf("Invalid number of parameters.");
		return -1;
	}

	const char* inputPath = argv[1];
	const char* outputPath = argv[2];
	const int outputWidth = std::stoi(argv[3]);

	fs::create_directories(outputPath);

	if (fs::exists(inputPath) && fs::is_directory(inputPath))
	{
		for (const auto& entry : fs::directory_iterator(inputPath))
		{
			if (fs::is_regular_file(entry.status()))
			{
				fs::path outputFile = fs::path(outputPath) / entry.path().filename();
				if (fs::exists(outputFile))
				{
					continue;
				}

				int width, height, channels;
				std::string inputFile = entry.path().string();
				unsigned char* pixels = stbi_load(inputFile.c_str(), &width, &height, &channels, 4);

				const int outputHeight = height * outputWidth / width;
				std::vector<unsigned char> thumbnail(outputWidth * outputHeight * 4);

				stbir_resize_uint8_linear(
					pixels,
					width,
					height,
					0,
					thumbnail.data(),
					outputWidth,
					outputHeight,
					0,
					STBIR_RGBA);

				stbi_write_jpg(
					outputFile.string().c_str(),
					outputWidth,
					outputHeight,
					4,
					thumbnail.data(),
					90);

				stbi_image_free(pixels);
			}
		}
	}
	else
	{
		printf("Invalid input path: %s.", inputPath);
		return -1;
	}

	return 0;
}