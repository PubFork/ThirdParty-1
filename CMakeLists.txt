# CMake 最低版本号要求
cmake_minimum_required(VERSION 2.8.3)
# 项目信 息
project(thirdparty)

#平台
IF (WIN32)
    MESSAGE(STATUS "This is Windows.")
    set(PLATFORM "win")
    set(LIBPATH ${PLATFORM})
ELSEIF (APPLE)
    MESSAGE(STATUS "This is MacOS.")
    set(PLATFORM "mac")
    set(LIBPATH ${PLATFORM})
ELSEIF (UNIX)
    MESSAGE(STATUS "This is Linux64.")
    set(PLATFORM "linux")
    set(LIBPATH ${PLATFORM})
ELSE ()
    MESSAGE(STATUS "================ ERROR: This platform is unsupported!!! ================")
ENDIF (WIN32)

#编译选项 Release 还是 Debug
set(CMAKE_BUILD_TYPE "Release" CACHE STRING "set build type to release default")
IF (CMAKE_BUILD_TYPE STREQUAL "")
    set(CMAKE_BUILD_TYPE "Release")
ENDIF ()
message("CMAKE_BUILD_TYPE TYPE = " ${CMAKE_BUILD_TYPE})
#开启此命令选项，则远程日志会直接输出到stdout，cmake .. -DDEBUG=ON /  cmake .. -DDEBUG=OFF关闭
IF ((DEBUG STREQUAL "ON") OR (DEBUG STREQUAL "on"))
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -DDEBUG")
ENDIF ()

message("PLATFORM = " ${PLATFORM}, ${CMAKE_BUILD_TYPE})

#编译的可执行程序输出目录
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

#工程INSTALL目录
if (UNIX)
    set(INSTALL_PREFIX /usr/local/thirdparty)
else ()
    set(INSTALL_PREFIX C:\\thirdparty)
endif ()

install(DIRECTORY include/ DESTINATION include)
install(DIRECTORY lib/${LIBPATH}/ DESTINATION lib)

set(CMAKE_INSTALL_PREFIX "${INSTALL_PREFIX}")
set(LIB_INSTALL "lib/")
set(INC_INSTALL "include/")

message("install dir = " ${CMAKE_INSTALL_PREFIX})

#第三方库
set(THIRD_PARTY_INC "${PROJECT_SOURCE_DIR}/include")
set(THIRD_PARTY_LIB "${PROJECT_SOURCE_DIR}/lib")
